import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import AboutJSON from "../../content/about.json"

import "../styles/about.scss"

const AboutPage = () => (
  <Layout>
    <Seo title="about" />
    <h1>{ AboutJSON.title }</h1>
    <strong>{ AboutJSON.heading }</strong>
    <br/>
    <div className="about-statement">
      {
        AboutJSON.body.map((p, index) => {
          return <p key={`about_body_${index}`}>{ p.text }</p>
        })
      }
    </div>
    <div className="about-tech">
      <h2>Tech</h2>
      <div className="tech-stacks">
        <div className="stack">
          <strong>Experienced:</strong>
          <ul>
            <li>JavaScript (+HTML+CSS)</li>
            <li>{"-> Node.js"}</li>
            <li>{"-> React.js"}</li>
            <li>{"-> Vue.js"}</li>
            <li>Python</li>
            <li>MongoDB</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="stack">
          <strong>Currently Learning:</strong>
          <ul>
            <li>Solidity</li>
            <li>Truffle</li>
            <li>Web3.js</li>
            <li>p5.js</li>
            <li>{"-> p5.sound"}</li>
            <li>IPFS</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
