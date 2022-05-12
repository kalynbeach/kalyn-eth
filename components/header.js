import Link from 'next/link'
import Nav from './nav'
// import styles from '../styles/components/header.module.scss'

export default function Header({ siteTitle }) {
  return (
    <header className='header'>
      <div className='header-inner'>
        <span className='header-title'>
          <Link href='/'>
            <a>{siteTitle}</a>
          </Link>
        </span>
        <Nav />
      </div>

      <style jsx>{`
        @import '../styles/mixins.module.scss';
        @import '../styles/variables.module.scss';

        header.header {
          background-color: $color-background-primary;

          .header-inner {
            @include layout-inner;
            min-height: $min-height-header;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            @media (max-width: $breakpoint-tablet) {
              margin: 0 0 2rem;
              padding: 4rem 2rem;
              flex-direction: column;
              align-items: stretch;
            }

            .header-title {
              font-family: $font-family-head;
              font-size: 1.25rem;
              margin: 0;

              a {
                color: white;
                text-decoration: none;
              }
            }
          }
        }
      `}</style>
    </header>
  )
}
