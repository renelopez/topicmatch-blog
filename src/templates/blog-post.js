import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Link } from "gatsby"

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    marginBottom: ".2em",
  },
  backButton: {
    textDecoration: "none",
  },
})

const BlogPage = ({ data, classes }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <div className={classes.root}>
        <Link to="/blog" className={classes.backButton}>
          <p>← Back to Blog</p>
        </Link>

        <Grid container spacing={24}>
          <Grid item xs={3}></Grid>
          <Grid item xs={9}>
            <h1 className={classes.title}>{post.frontmatter.title}</h1>
            <h4>{post.frontmatter.date}</h4>
            <p dangerouslySetInnerHTML={{ __html: post.html }} />
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default withStyles(styles)(BlogPage)

export const BlogPageQuery = graphql`
  query BlogPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
