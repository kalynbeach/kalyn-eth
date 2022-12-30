import Link from 'next/link'
import Nav from './nav'
import styles from '../styles/components/header.module.css'

export default function Header({ siteTitle }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <span className={styles.headerTitle}>
          <Link href='/'>
            {siteTitle}
          </Link>
        </span>
        <Nav />
      </div>
    </header>
  )
}
