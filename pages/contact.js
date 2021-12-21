import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/contact.module.scss'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} - contact`}</title>
      </Head>
      <h1>Contact</h1>
      <div className={styles.contactGrid}>
        <span className={styles.contactApp}>Discord</span>
        <span className={styles.contactSep}>{'=>'}</span>
        <span className={styles.contactHandle}>kalyn.eth#0824</span>

        <span className={styles.contactApp}>GitHub</span>
        <span className={styles.contactSep}>{'=>'}</span>
        <span className={styles.contactHandle}>@kalynbeach</span>

        <span className={styles.contactApp}>Twitter</span>
        <span className={styles.contactSep}>{'=>'}</span>
        <span className={styles.contactHandle}>@kalynbeach</span>

        <span className={styles.contactApp}>Email</span>
        <span className={styles.contactSep}>{'=>'}</span>
        <span className={styles.contactHandle}>kalynbeach at gmail dot com</span>
      </div>
    </Layout>
  )
}
