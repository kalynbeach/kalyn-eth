import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

const WorkPage = () => (
  <Layout>
    <Seo title="Work" />
    <h1>Work</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WorkPage
