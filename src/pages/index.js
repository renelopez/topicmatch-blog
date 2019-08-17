import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BlogItem from "../components/blogItem"

const IndexPage = props => {
  const { data } = props

  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Topic-Match Blog</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {posts &&
          posts.map(({ node: post }) => (
            <BlogItem
              key={post.id}
              post={post.frontmatter}
              image={post.frontmatter.image.childImageSharp.fluid.src}
              style={{ marginRight: 10, width: "50%" }}
              slug={post.fields.slug}
              date={[post.frontmatter.date]}
            ></BlogItem>
          ))}
      </div>
    </Layout>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogPageQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter__date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 40)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={data => <IndexPage data={data} />}
  />
)
