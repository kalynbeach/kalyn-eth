import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

import "../styles/about.scss"

const AboutPage = () => (
  <Layout>
    <Seo title="about" />
    <h1>About</h1>
    <strong>gm</strong>
    <br/>
    <div className="about-statement">
      <p>
        My name's Kalyn Beach. 
      </p>
      <p>
        I'm a musician + engineer living in Los Angeles, CA.
      </p>
      <p>
        I love to listen and create.
      </p>
      <p>
        I'm grateful to be here, alive; priviledged, living with
        relative comfort in America, given the opportunities I've
        needed to grow, compensated enough to thrive.
      </p>
      <p>
        As a '90s kid who grew up on the Internet, it's been a 
        trip watching how the world has played out over the
        past couple decades. There's insane potential in what
        we can do individually and collectively, yet so many
        people are still systematically held back in life for
        no good reason. 
      </p>
      <p>
        Through art and tech, I aim to inspire and empower people
        less fortunate than I - on the largest possible scale.
        More diverse stories; more impactful experiences; more
        human connection. More equity; more financial freedom;
        more opportunity.
      </p>
      <p>
        I'm driven to create and share art that resonates with people,
        and to uplift artists who are driven to do the same.
        With code, I intend to contribute to platforms and communities
        that share these ideals for the future and are building toward
        them today. Much to learn, much to give.
      </p>
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
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
