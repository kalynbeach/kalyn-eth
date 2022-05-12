import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
// import styles from '../styles/pages/about.module.scss'

import AboutJSON from '../content/about.json'

const pageTitle = 'about'
const pageHeading = 'loading...'

export async function getStaticProps() {
  const content = AboutJSON.body
  return {
    props: {
      content
    }
  }
}

export default function About({ content }) {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} - ${pageTitle}`}</title>
      </Head>
      <h1>{ pageTitle }</h1>
      <strong>{pageHeading}</strong>
      <br/>
      <div className='about-statement'>
        {/* {
          content.map((p, index) => {
            return <p key={`about_body_${index}`}>{ p.text }</p>
          })
        } */}
      </div>
      <div className='about-tech'>
        <h2>Tech</h2>
        <div className='tech-stacks'>
          <div className='stack'>
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
          <div className='stack'>
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

      <style jsx>{`
        @import "../styles/variables.module.scss";

        .about-statement {
          margin-bottom: 2rem;
        }

        .about-tech {

          h2 {
            margin-bottom: 2rem;
          }

          .tech-stacks {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;

            @media (max-width: $breakpoint-tablet) {
              flex-direction: column;
            }

            .stack {
              &:last-of-type {
                margin-left: 4rem;
                @media (max-width: $breakpoint-tablet) {
                  margin: 2rem 0 0 0;
                }
              }

              ul {
                list-style: none;
                margin: 0 0 0 2rem;
                @media (max-width: $breakpoint-tablet) {
                  margin: 0 0 0 1rem;
                };
              }
            }
          }
        }
      `}</style>
    </Layout>
  )
} 
