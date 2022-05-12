import Head from 'next/head'
import Header from './header'
import Nav from './nav'
import Footer from './footer'
// import styles from '../styles/components/layout.module.scss'
// import utilStyles from '../styles/utils.module.scss'

export const siteTitle = 'kalyn.eth'

export default function Layout({ children, home }) {
  return (
    <div className='layout'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="kalyn.eth - Kalyn Beach's site" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header siteTitle={siteTitle || `kalyn.eth`} />
      <div className='layout-inner'>
        <main>
          {children}
        </main>
      </div>
      <Footer />

      <style jsx>{`
        @import '../styles/mixins.module.scss';
        @import '../styles/variables.module.scss';

        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          background-color: $color-background-primary;
          transition: all 0.1s;

          .layout-inner {
            @include layout-inner;
            flex: 1;
            margin-bottom: auto;
            padding-top: 4rem;
            display: flex;
            flex-direction: row;

            @media (max-width: $breakpoint-tablet) {
              padding-top: 2rem;
              flex-direction: column;
            }

            main {
              flex: 1 0;
              display: flex;
              flex-direction: column;
              justify-content: baseline;

              @media (min-width: $breakpoint-tablet) {
                // margin: 0 0 2rem 4rem;
              }

              @media (min-width: $breakpoint-desktop) {
                // margin: 0 0 2rem 6rem;
              }

              h1 {
                margin-left: auto;
              }
            }
          }
        }  
      `}</style>
    </div>
  )
}
