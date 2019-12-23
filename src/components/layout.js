import React from "react"
import { Link } from "gatsby"

import Logo from "../images/HLlogo(nobkround).png"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" class="site-head-left">
            <ul className="nav" role="menu">
              {/* <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li> */}
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>Our Story</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link to={`/elements`}>Services</Link>
              </li>
              <li className="nav-tags" role="menuitem">
                <Link to={`/tags`}>Contact Us</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {/* <img src={Logo} /> */}
              {title}
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://www.facebook.com/hustlelaw"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/hustle_law"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/hustle_law/"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/hustle-law/about/?viewAsMember=true"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        <Link to={`/`}>Hit Us With Your Hustles</Link> &mdash;{" "}
        <a href="mailto:info@hustlelawgroup.com">info@hustlelawgroup.com</a>
        <div className="site-head-right">
          <p>79 Madison Ave, New York, NY, 10016</p>
        </div>
        <div className="site-head-right">
          <p>201-285-7351</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
