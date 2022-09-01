import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/components/nav.module.scss'
// import Image from 'next/image'

export default function Nav() {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <div className={styles.navLinks}>
        <Link href='/about'>
          <a className={router.pathname == '/about' ? styles.activeLink : null}>about</a>
        </Link>
        <Link href='/blog'>
          <a className={router.pathname == '/blog' ? styles.activeLink : null}>blog</a>
        </Link>
        {/* <Link href='/work'>
          <a className={router.pathname == '/work' ? styles.activeLink : null}>work</a>
        </Link> */}
        {/* <Link href='/contact'>
          <a className={router.pathname == '/contact' ? styles.activeLink : null}>contact</a>
        </Link> */}
      </div>
    </nav>
  )
}
