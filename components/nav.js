import Link from 'next/link'
import styles from './nav.module.scss'
// import Image from 'next/image'

// import squiggle500 from '../public/images/CS-500-Gray.png'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLinks}>
        <Link href='/about'><a>About</a></Link>
        <Link href='/work'><a>Work</a></Link>
        <Link href='/contact'><a>Contact</a></Link>
      </div>
      <div className={styles.navImg}>
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
    </nav>
  )
}
