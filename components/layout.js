import Head from 'next/head'
import Header from './header'
import Nav from './nav'
import Footer from './footer'
import styles from '../styles/components/layout.module.scss'
// import utilStyles from '../styles/utils.module.scss'

export const siteTitle = 'kalyn.eth'

export default function Layout({ children, home }) {
  return (
    <div className={styles.layout}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="kalyn.eth - Kalyn Beach's site" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.layoutInner}>
        <Header siteTitle={siteTitle || `kalyn.eth`} />
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}
