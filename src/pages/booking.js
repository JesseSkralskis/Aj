import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image/withIEPolyfill"
import BookingStyles from "../styles/pages/booking.module.scss"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Booking = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAjContent {
        edges {
          node {
            booking {
              fluid {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const fluid = data.allContentfulAjContent.edges[0].node.booking.fluid

  return (
    <Layout>
      <Helmet>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
        ></script>
      </Helmet>
      <div className={BookingStyles.container}>
        <div className={BookingStyles.header}>
          <h1>Booking</h1>
        </div>
        <div className={BookingStyles.sidebar}>
          <Img
            style={{
              height: "100%",
            }}
            imgStyle={{ objectFit: "cover" }}
            fluid={fluid}
          />
        </div>
        <div className={BookingStyles.bookingContent}>
          <div
            className={["calendly-inline-widget"]}
            data-url="https://calendly.com/jesseskralskis/tutoring-session"
            style={{
              width: "100%",
              height: "100%",
              background: "white",

              // marginLeft: "3rem"
            }}
          >
            {/* <script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
            ></script> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Booking
