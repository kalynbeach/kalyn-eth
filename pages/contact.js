import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/contact.module.scss'

import ContactJSON from '../content/contact.json'

const pageTitle = 'contact'
const pageHeading = ''

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
      <div className={styles.contactGrid}>
        {
          info.map((infoEntry, index) => {
            return (
              <div className={styles.contactGridEntry} key={`contact_entry_${index}`}>
                <span className={styles.contactApp}>{infoEntry.app}</span>
                <span className={styles.contactSep}>{'=>'}</span>
                <span className={styles.contactHandle}>{infoEntry.handle}</span>
              </div>
            )
          })
        }
      </div>
    </Layout>
  )
}
