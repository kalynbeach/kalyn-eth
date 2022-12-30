import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/components/nav.module.css'
// import Image from 'next/image'

export default function Nav() {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <div className={styles.navLinks}>
        <Link href='/about' className={router.pathname == '/about' ? styles.activeLink : null}>
          about
        </Link>
        <Link href='/blog' className={router.pathname == '/blog' ? styles.activeLink : null}>
          blog
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
