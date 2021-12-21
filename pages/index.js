import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Yo.</h1>
      <p>Just beginning to build this site -- more to come 👷🏽‍♂️ 🛠 🔊</p>
    </Layout>
  )
}
