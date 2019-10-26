import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import BackgroundImage from "gatsby-background-image"
import LandingStyles from './landing.module.scss'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  
      query {
        allContentfulAjContent {
          edges {
            node {
              landingImage {
                fluid {
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    
  `)
 const fluid = data.allContentfulAjContent.edges[0].node.landingImage.fluid
  

  return (
    <Layout>
      <BackgroundImage
        Tag="section"
        className={LandingStyles.container}
        fluid={fluid}
      >
        <div className={LandingStyles.card}>
          <div className={LandingStyles.content}>
            <h1>Professional Tutoring</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  )
}

export default IndexPage
