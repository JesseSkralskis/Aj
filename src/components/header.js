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
    <header className={HeaderStyles.headerContainer}>
      <div className={HeaderStyles.navItems}>
        <h3 className={HeaderStyles.navItem}>
          {" "}
          <i
            styles={{
              color: "black",
            }}
            class="fas fa-infinity fa-lg"
          ></i>{" "}
          AJ's Math <span className={HeaderStyles.tutoring}>Tutoring</span>
        </h3>

        <Link
          to="/"
          className={HeaderStyles.navItem}
          activeClassName={HeaderStyles.active}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={HeaderStyles.navItem}
          activeClassName={HeaderStyles.active}
        >
          About Me
        </Link>

        <Link
          to="/offered"
          className={HeaderStyles.navItem}
          activeClassName={HeaderStyles.active}
        >
          Offerings
        </Link>

        <Link
          to="/booking"
          className={HeaderStyles.navItem}
          activeClassName={HeaderStyles.active}
        >
          Payment
        </Link>

        <Link to="/payment"></Link>
      </div>
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
