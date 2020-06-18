/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "../styles/index.scss"
import layoutStyles from "../styles/components/layout.module.scss"

import Header from "./header"
import Footer from "./footer"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.header}>
        <Header />
      </div>

      <div className={layoutStyles.content}> {props.children}</div>

      <div className={layoutStyles.footer}>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
