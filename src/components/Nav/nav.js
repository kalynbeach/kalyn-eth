import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./nav.scss"

const Nav = () => (
  <aside className="nav">
    <div className="nav-links">
      <Link to="/about/">About</Link>
      <Link to="/work/">Work</Link>
      <Link to="/contact/">Contact</Link>
    </div>
    <a href="https://artblocks.io/token/500"
      aria-label="Chromie Squiggle #500"
      target="_blank"
      rel="noopener noreferrer">
      <StaticImage
        src="../../images/CS-500-Gray.png"
        title="Proud owner of Chromie Squiggle #500"
        width={150}
        quality={100}
        placeholder="blurred"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Chromie Squiggle #500"
        className="squiggle"
      />
    </a>
  </aside>
)

// Nav.propTypes = {}

// Nav.defaultProps = {}

export default Nav
