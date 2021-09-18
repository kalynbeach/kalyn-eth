import * as React from "react"
// import PropTypes from "prop-types"
// import { Link } from "gatsby"

import "./footer.scss"

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <span>© Kalyn Beach {new Date().getFullYear()}</span>
      <div className="footer-links">
        <a href="https://github.com/kalynbeach" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://discordapp.com/channels/@me/KB#8447/" target="_blank" rel="noopener noreferrer">Discord</a>
        <a href="https://twitter.com/kalynbeach" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </div>
  </footer>
)

export default Footer