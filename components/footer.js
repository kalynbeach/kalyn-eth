import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <span>© Kalyn Beach {new Date().getFullYear()}</span>
        <div className={styles.footerLinks}>
          <a href='https://github.com/kalynbeach' target='_blank' rel='noopener noreferrer'>GitHub</a>
          <a href='https://discordapp.com/channels/@me/KB#8447/' target='_blank' rel='noopener noreferrer'>Discord</a>
          <a href='https://twitter.com/kalynbeach' target='_blank' rel='noopener noreferrer'>Twitter</a>
        </div>
      </div>
    </footer>
  )
}