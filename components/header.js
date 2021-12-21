import Link from 'next/link'
import styles from './header.module.scss'

export default function Header({ siteTitle }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <span className={styles.headerTitle}>
          <Link href='/'>
            <a>{siteTitle}</a>
          </Link>
        </span>
      </div>
    </header>
  )
}
