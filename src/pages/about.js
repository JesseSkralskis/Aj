import React from "react"
import Layout from "../components/layout"
import AboutStyles from "../styles/pages/about.module.scss"

import Img from "gatsby-image/withIEPolyfill"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      Aj: file(relativePath: { eq: "Aj.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data.Aj.childImageSharp.fluid)

  return (
    <Layout>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Cinzel|Open+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>

      <div className={AboutStyles.container}>
        <div className={AboutStyles.image}>
          <Img
            className={AboutStyles.pic}
            // style={{}}

            fluid={data.Aj.childImageSharp.fluid}
          />
        </div>

        <div className={AboutStyles.bio}>
          <h3>About Me</h3>
          <p>
            AJ Newball is a math educator of the highest caliber and experience.
            It is very rare to find a tutor who has taught math at the
            elementary, middle, high school, community college, university
            levels and internationally in Japan, Taiwan and Thailand. From first
            grade adding to differential equations at San Jose State University
            in the heart of Silicon Valley AJ has the experience, vision, and
            understanding to help you overcome any mathematical obstacles in
            your path...
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
