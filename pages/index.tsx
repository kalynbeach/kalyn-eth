import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'


const pageTitle = 'hello'
const pageHeading = 'loading...'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>{pageTitle}</h1>
      <strong>{pageHeading}</strong>
      {/* <p></p> */}
    </Layout>
  )
}
