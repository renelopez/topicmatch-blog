import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CoolNewPage = () => (
  <Layout>
    <SEO title="Cool New Page" />
    <h1>Cool New Page</h1>
    <p>Gatsby is Magical but worth learning</p>
    <Link to="/">Go back to the homepage (index.js file)</Link>
  </Layout>
)

export default CoolNewPage
