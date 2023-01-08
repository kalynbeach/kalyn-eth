import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

const pageTitle = 'hello'
const pageHeading = 'yo'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className='mb-24 text-4xl font-bold'>{pageTitle}</h1>
      <strong className='mb-4'>{pageHeading}</strong>
      {/* <p></p> */}
    </Layout>
  )
}
