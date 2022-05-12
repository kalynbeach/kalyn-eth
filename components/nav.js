import Link from 'next/link'
// import styles from '../styles/components/nav.module.scss'
// import Image from 'next/image'

// import squiggle500 from '../public/images/CS-500-Gray.png'

export default function Nav() {
  return (
    <nav className='nav'>
      <div className='navLinks'>
        <Link href='/about'><a>about</a></Link>
        <Link href='/work'><a>work</a></Link>
        <Link href='/contact'><a>contact</a></Link>
      </div>
      <div className='navImg'>
        {/* <a href='https://artblocks.io/token/500'
          className={styles.navImgLink}
          aria-label='Chromie Squiggle #500'
          target='_blank'
          rel='noopener noreferrer'>
          <Image
            src={squiggle500}
            alt='Chromie Squiggle #500'
            layout='responsive'
            placeholder='blur'
          />
        </a> */}
      </div>

      <style jsx>{`
        @import '../styles/variables.module.scss';
        .nav {
          // display: flex;
          // flex-direction: column;
          // justify-content: flex-start;

          @media (max-width: $breakpoint-tablet) {
            // margin: 0 0 2rem;
            flex-direction: row;
            justify-content: space-between;
          }

          .navLinks {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            a {
              font-family: $font-family-head;
              font-size: 1rem;
              font-weight: 400;
              color: white;
              text-decoration: none;

              &:not(:last-of-type) {
                margin-right: 2rem;
              }

              @media (max-width: $breakpoint-tablet) {
                &:not(:last-of-type) {
                  // margin-bottom: 1rem;
                }
              }
            }
          }

          .navImg {
            margin-top: auto;
            a.navImgLink {
          
              // @media (max-width: $breakpoint-tablet) {
              //   margin-bottom: 0;
              // }
            }
          }
        }
      `}</style>
    </nav>
  )
}
