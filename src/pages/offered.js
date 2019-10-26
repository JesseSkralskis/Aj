import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import OfferedStyles from "./offered.module.scss"

const Offered = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAjContent {
        edges {
          node {
            offeredBackground {
              fluid {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  console.log(data.allContentfulAjContent.edges[0].node.offeredBackground.fluid)
  const fluid =
    data.allContentfulAjContent.edges[0].node.offeredBackground.fluid

  return (
    <Layout>
      <BackgroundImage
        Tag="section"
        className={OfferedStyles.container}
        fluid={fluid}
        style={{}}
      >
        <div className={OfferedStyles.content1}>
          <div className={OfferedStyles.inner1}></div>

          <h1>Offerings</h1>
          <p>Direct 1-1 tutoring</p>
          <p>SAT/ACT tutoring</p>
          <p>Career math needs counseling</p>
          <p>Math Anxiety Therapy</p>
          <p>Group tutoring</p>
        </div>

        <div className={OfferedStyles.content2}>
          <h1>Offerings</h1>
          <p>Educator Guidance</p>
          <p>Parent Guidance</p>
          <p>Online tutoring</p>
          <p>Summer Workshops</p>
          <p>Travel Tutoring</p>
        </div>
      </BackgroundImage>
    </Layout>
  )
}

export default Offered
