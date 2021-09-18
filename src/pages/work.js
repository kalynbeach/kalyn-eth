import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

import "../styles/work.scss"

const WorkPage = () => (
  <Layout>
    <Seo title="work" />
    <h1>Work</h1>
    <div className="work-grid">
      <div className="work-position">
        <span className="position-period">2014 - 2015</span>
        <span className="position-title">Web Development Contractor</span>
        <span className="position-company">CPR Web Contracting</span>
        <p className="position-desc">
          Built informational micro-sites, gained foundational web dev experience.
        </p>
      </div>
      <div className="work-position">
        <span className="position-period">06/2015 - 09/2015</span>
        <span className="position-title">Software Engineer Intern</span>
        <span className="position-company">Demand Media</span>
        <p className="position-desc">
          Interned on the eHow.com engineering team: implemented frontend
          features, built internal utilities, started to learn about web
          development at scale.
        </p>
      </div>
      <div className="work-position">
        <span className="position-period">09/2015 - Present</span>
        <span className="position-title">Software Engineer</span>
        <span className="position-company">Leaf Group (formerly Demand Media)</span>
        <p className="position-desc">
          Ongoing work on multiple large-scale, internal web content systems handling
          dozens of sites and millions of impressions per month. Collaborated with a small
          team (c.2015-2017) to build a central content platform frontend, still in use today.
          More recently working on new sites, web performance analysis & improvement, and
          internal workflow tools.
        </p>
      </div>
    </div>
  </Layout>
)

export default WorkPage
