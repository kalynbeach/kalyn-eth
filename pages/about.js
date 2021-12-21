import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/about.module.scss'

import AboutJSON from '../content/about.json'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} - about`}</title>
      </Head>
      <h1>{ AboutJSON.title }</h1>
      <strong>{ AboutJSON.heading }</strong>
      <br/>
      <div className={styles.aboutStatement}>
        {
          AboutJSON.body.map((p, index) => {
            return <p key={`about_body_${index}`}>{ p.text }</p>
          })
        }
      </div>
      <div className={styles.aboutTech}>
        <h2>Tech</h2>
        <div className={styles.techStacks}>
          <div className={styles.stack}>
            <strong>Experienced:</strong>
            <ul>
              <li>JavaScript (+HTML+CSS)</li>
              <li>{'-> TypeScript'}</li>
              <li>{'-> Node.js'}</li>
              <li>{'-> React.js'}</li>
              <li>{'-> Vue.js'}</li>
              <li>Python</li>
              <li>{'-> Flask'}</li>
              <li>{'-> Django'}</li>
              <li>MongoDB</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className={styles.stack}>
            <strong>Studying:</strong>
            <ul>
              <li>Solidity</li>
              <li>Hardhat</li>
              <li>Truffle</li>
              <li>IPFS</li>
              <li>ENS</li>
              <li>p5.js</li>
              <li>{'-> p5.sound'}</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
