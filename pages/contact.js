import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
// import styles from '../styles/pages/contact.module.scss'

import ContactJSON from '../content/contact.json'

const pageTitle = 'contact'
const pageHeading = 'loading...'

export async function getStaticProps() {
  const info = ContactJSON.info
  return {
    props: {
      info
    }
  }
}

export default function Contact({ info }) {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} - ${pageTitle}`}</title>
      </Head>
      <h1>{pageTitle}</h1>
      <strong>{pageHeading}</strong>
      <div className='contact-grid'>
        {
          info.map((infoEntry, index) => {
            return (
              <div className='contact-grid-entry' key={`contact_entry_${index}`}>
                <span className='contact-app'>{infoEntry.app}</span>
                <span className='contact-sep'>{'=>'}</span>
                <span className='contact-handle'>{infoEntry.handle}</span>
              </div>
            )
          })
        }
      </div>

      <style jsx>{`
        @import "../styles/variables.module.scss";

        .contact-grid {
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;

          @media (max-width: $breakpoint-tablet) {
            width: 100%;
          }

          .contact-grid-entry {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .contact-app {
              flex: 0 1 30%;
            }
          
            .contact-sep {
              flex: 1;
              content: "=>";
            }
          
            .contact-handle {
              grid-column: 3;
            }
          }
        }
      `}</style>
    </Layout>
  )
}
