import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

import "../styles/contact.scss"

const ContactPage = () => (
  <Layout>
    <Seo title="contact" />
    <h1>Contact</h1>
    <div className="contact-grid">
      <span className="contact-app">Discord</span>
      <span className="contact-mid">{"=>"}</span>
      <span className="contact-handle">KB#8447</span>

      <span className="contact-app">GitHub</span>
      <span className="contact-mid">{"=>"}</span>
      <span className="contact-handle">@kalynbeach</span>

      <span className="contact-app">Twitter</span>
      <span className="contact-mid">{"=>"}</span>
      <span className="contact-handle">@kalynbeach</span>

      <span className="contact-app">Email</span>
      <span className="contact-mid">{"=>"}</span>
      <span className="contact-handle">kalynbeach @ gmail . com</span>
    </div>
  </Layout>
)

export default ContactPage
