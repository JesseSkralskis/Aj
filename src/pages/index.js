import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import BackgroundImage from "gatsby-background-image"
import LandingStyles from "../styles/pages/landing.module.scss"

const IndexPage = () => {
  const positionMaker = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 360) {
      return { backgroundPosition: "-7rem 0" }
    }
    if (typeof window !== "undefined" && window.innerWidth <= 375) {
      return { backgroundPosition: "-12rem 0" }
    }
  }
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
        style={positionMaker()}
      >
        <div className={LandingStyles.card}>
          <div className={LandingStyles.content}>
            <h1>"Problems come to be solved"</h1>
            <p>
              Ensure the brightest future for your child or yourself by getting
              one of the world's premier math tutors.
            </p>
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  )
}

export default IndexPage
