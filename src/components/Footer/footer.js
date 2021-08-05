import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./footer.scss"

const Footer = () => (
  <footer className="footer">
    © Kalyn Beach {new Date().getFullYear()}
    {` `}
  </footer>
)

export default Footer