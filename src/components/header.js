import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderStyles from "../styles/components/header.module.scss"
import { Helmet } from "react-helmet"

const Header = ({ siteTitle }) => (
  <div className={HeaderStyles.container}>
    <Helmet>
      <script
        src="https://kit.fontawesome.com/8781c2ec8e.js"
        crossorigin="anonymous"
      ></script>
    </Helmet>
    <header>
      <ol className={HeaderStyles.navItems}>
        <li className={HeaderStyles.logoBox}>
          <h3 className={HeaderStyles.logo}>
            {" "}
            <i
              styles={{
                color: "black",
              }}
              class="fas fa-infinity fa-lg"
            ></i>{" "}
            Aj's Tutoring
          </h3>
        </li>
        <li>
          <Link
            to="/"
            className={HeaderStyles.navItems}
            activeClassName={HeaderStyles.active}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={HeaderStyles.navItems}
            activeClassName={HeaderStyles.active}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="/offered"
            className={HeaderStyles.navItems}
            activeClassName={HeaderStyles.active}
          >
            Offerings
          </Link>
        </li>
        <li>
          <Link
            to="/booking"
            className={HeaderStyles.navItems}
            activeClassName={HeaderStyles.active}
          >
            Booking
          </Link>
        </li>

        <li>
          <Link to="/payment">

          </Link>
        </li>
      </ol>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
