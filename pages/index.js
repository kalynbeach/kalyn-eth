import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

const pageTitle = 'yo'
const pageHeading = 'what\'s good?'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>{pageTitle}</h1>
      <strong>{pageHeading}</strong>
      <p>More to come 👷🏽‍♂️ 🛠 🔊</p>
    </Layout>
  )
}
