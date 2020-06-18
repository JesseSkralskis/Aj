import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import OfferedStyles from "../styles/pages/offered.module.scss"

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
          <div className={OfferedStyles.header}>
            <h1>Offerings</h1>
          </div>
          <div className={OfferedStyles.offerings}>
            <p>
              Direct 1-1 <br /> tutoring
            </p>
            <p>
              SAT/ACT <br /> tutoring
            </p>
            <p>
              Career <br /> Counseling
            </p>
            <p>
              Math Anxiety <br /> Therapy
            </p>
            <p>
              Group <br />
              tutoring
            </p>

            <p>
              Educator <br /> Guidance
            </p>
            <p>
              Parent <br />
              Guidance
            </p>
            <p>
              Online <br />
              tutoring
            </p>
            <p>
              Summer <br /> Workshops
            </p>
            <p>
              Travel <br /> Tutoring
            </p>
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  )
}

export default Offered
