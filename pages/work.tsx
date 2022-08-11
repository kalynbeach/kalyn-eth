import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/pages/work.module.scss'
// import WorkJSON from '../content/work.json'


const pageTitle = 'work'
const pageHeading = 'working...'


// export async function getStaticProps() {
//   const history = WorkJSON.history
//   return {
//     props: {
//       history
//     }
//   }
// }


export default function Work() {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} - work`}</title>
      </Head>
      <h1>{pageTitle}</h1>
      <strong>{pageHeading}</strong>
      {/* <div className={styles.workGrid}>
        {
          history.map((position, index) => {
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
      </div> */}
    </Layout>
  )
}


