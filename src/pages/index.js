import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="root" />
    <h1>Yo. More to come... 🛠</h1>
    <StaticImage
      src="../images/CS-500-Gray.png"
      width={300}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Chromie Squiggle #500"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
