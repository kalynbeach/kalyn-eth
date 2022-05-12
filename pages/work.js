import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
// import styles from '../styles/pages/work.module.scss'

import WorkJSON from '../content/work.json'

const pageTitle = 'work'
const pageHeading = ''

export async function getStaticProps() {
  const history = WorkJSON.history
  return {
    props: {
      history
    }
  }
}

export default function Work({ history }) {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} - work`}</title>
      </Head>
      <h1>{pageTitle}</h1>
      <strong>{pageHeading}</strong>
      <div className='work-grid'>
        {
          history.map((position, index) => {
            return (
              <div className='work-position' key={`work_history_${index}`}>
                <span className='position-period'>{ position.period }</span>
                <span className='position-title'>{ position.title }</span>
                <span className='position-company'>{ position.company }</span>
                <p className='position-description'>{ position.description }</p>
              </div>
            )
          })
        }
      </div>

      <style jsx>{`
        @import "../styles/variables.module.scss";

        .work-grid {
          width: 100%;
          display: flex;
          flex-direction: column;

          .work-position {
            margin-bottom: 2rem;
            display: grid;
            grid-template-columns: auto auto 1fr;
            grid-template-rows: 1.25rem 3rem 1fr;

            @media (max-width: $breakpoint-tablet) {
              grid-template-rows: 1.5rem 1.5rem auto 1fr;
            }

            grid-row: 3;

            .position-period {
              font-size: 13px;
              grid-column: 1 / 2;
              grid-row: 1;
            }

            .position-title,
            .position-company {
              margin: auto 0;
              font-size: 16px;
              font-weight: bold;

              @media (max-width: $breakpoint-tablet) {
                margin-bottom: 1rem;
              }
            }

            .position-title {
              grid-column: 1;
              grid-row: 2;

              @media (max-width: $breakpoint-tablet) {
                grid-column: 1 / 4;
                grid-row: 2;
              }

              &::after {
                margin: auto 1rem;
                content: "@";
              }
            }

            .position-company {
              grid-column: 2;
              grid-row: 2;

              @media (max-width: $breakpoint-tablet) {
                grid-column: 1 / 4;
                grid-row: 3;
              }
            }

            .position-description {
              font-size: 15px;
              grid-column: 1 / 4;
              grid-row: 3;

              @media (max-width: $breakpoint-tablet) {
                font-size: 14px;
                grid-row: 4;
              }
            }
          }
        }
      `}</style>
    </Layout>
  )
}


