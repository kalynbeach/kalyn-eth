import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import WorkJSON from "../../content/work.json"

import "../styles/work.scss"

const WorkPage = () => (
  <Layout>
    <Seo title="work" />
    <h1>{ WorkJSON.title }</h1>
    <div className="work-grid">
      {
        WorkJSON.history.map((position, index) => {
          return (
            <div className="work-position" key={`work_history_${index}`}>
              <span className="position-period">{ position.period }</span>
              <span className="position-title">{ position.title }</span>
              <span className="position-company">{ position.company }</span>
              <p className="position-desc">{ position.description }</p>
            </div>
          )
        })
      }
    </div>
  </Layout>
)

export default WorkPage
