/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import  '../styles/index.scss';
import layoutStyles from './layout.module.scss'



import Header from "./header"
import Footer from './footer'
 


const Layout = (props) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div className={layoutStyles.container} >
            <div className={layoutStyles.content} >
           
            <Header />
                {props.children}
             </div>

             {/* sticky footer */}

            <Footer />
        </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
