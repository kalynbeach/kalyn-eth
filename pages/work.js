import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/work.module.scss'

import WorkJSON from '../content/work.json'

export default function Work() {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} - work`}</title>
      </Head>
      <h1>{ WorkJSON.title }</h1>
      <div className={styles.workGrid}>
        {
          WorkJSON.history.map((position, index) => {
            return (
              <div className={styles.workPosition} key={`work_history_${index}`}>
                <span className={styles.positionPeriod}>{ position.period }</span>
                <span className={styles.positionTitle}>{ position.title }</span>
                <span className={styles.positionCompany}>{ position.company }</span>
                <p className={styles.positionDesc}>{ position.description }</p>
              </div>
            )
          })
        }
      </div>
    </Layout>
  )
}


