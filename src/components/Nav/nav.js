import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./nav.scss"

const Nav = () => (
  <aside className="nav">
    <div className="nav-links">
      <Link to="/about/">About</Link>
      <Link to="/work/">Work</Link>
      <Link to="/contact/">Contact</Link>
    </div>
  </aside>
)

// Nav.propTypes = {}

// Nav.defaultProps = {}

export default Nav
