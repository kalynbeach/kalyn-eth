import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export const siteTitle = 'kalyn.eth'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className='dark flex flex-col justify-start bg-night-900 transition-all'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="kalyn.eth - Kalyn Beach" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className='flex-1 w-full min-h-screen mx-auto px-8 flex flex-col md:max-w-3xl md:px-4 lg:max-w-5xl'>
        <Header siteTitle={siteTitle || `kalyn.eth`} />
        <main className='min-h-screen py-12 flex-1 flex flex-col'>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
