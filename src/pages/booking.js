import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image/withIEPolyfill"
import BookingStyles from "../styles/pages/booking.module.scss"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import { loadStripe } from "@stripe/stripe-js"
import ButtonStyles from "../styles/buttons/buttons.module.scss"

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PK_KEY)

const redirectToCheckout = async event => {
  event.preventDefault()
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: "price_1GrnMECmetnbxKY0MuOSKFz2", quantity: 1 }],
    successUrl: `https://upbeat-bardeen-c5aa6c.netlify.app/`,
    cancelUrl: `https://upbeat-bardeen-c5aa6c.netlify.app/`,
    mode: "payment",
  })

  if (error) {
    console.warn("Error:", error)
  }
}

const redirectToCheckout2 = async event => {
  event.preventDefault()
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: "price_1GvWJGCmetnbxKY0S2ji4SSZ", quantity: 1 }],
    successUrl: `https://upbeat-bardeen-c5aa6c.netlify.app/`,
    cancelUrl: `https://upbeat-bardeen-c5aa6c.netlify.app/`,
    mode: "payment",
  })

  if (error) {
    console.warn("Error:", error)
  }
}

const redirectToCheckout3 = async event => {
  event.preventDefault()
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: "price_1GvWIsCmetnbxKY0UP2hqxVV", quantity: 1 }],
    successUrl: `https://upbeat-bardeen-c5aa6c.netlify.app/`,
    cancelUrl: `https://upbeat-bardeen-c5aa6c.netlify.app/`,
    mode: "payment",
  })

  if (error) {
    console.warn("Error:", error)
  }
}

const redirectToCheckout4 = async event => {
  event.preventDefault()
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: "price_1GvWIdCmetnbxKY0AyEcDMRm", quantity: 1 }],
    successUrl: `https://upbeat-bardeen-c5aa6c.netlify.app/`,
    cancelUrl: `https://upbeat-bardeen-c5aa6c.netlify.app/`,
    mode: "payment",
  })

  if (error) {
    console.warn("Error:", error)
  }
}

const Booking = () => {
  const picSize = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 350) {
      return { marginLeft: "2rem", maxHeight: "calc(33vh - 4rem)" }
    }
    if (
      typeof window !== "undefined" &&
      window.innerWidth <= 400 &&
      typeof window !== "undefined" &&
      window.innerHeight <= 650
    ) {
      return { marginLeft: "2rem", maxHeight: "calc(38vh - 4rem)" }
    }
    if (
      typeof window !== "undefined" &&
      window.innerWidth <= 400 &&
      typeof window !== "undefined" &&
      window.innerHeight <= 670
    ) {
      return { marginLeft: "2rem", maxHeight: "calc(31vh - 4rem)" }
    }

    if (
      typeof window !== "undefined" &&
      window.innerWidth <= 400 &&
      typeof window !== "undefined" &&
      window.innerHeight <= 820
    ) {
      return { marginLeft: "2rem", maxHeight: "calc(38vh - 4rem)" }
    }
    if (
      typeof window !== "undefined" &&
      window.innerWidth <= 450 &&
      typeof window !== "undefined" &&
      window.innerHeight <= 750
    ) {
      return { marginLeft: "2rem", maxHeight: "calc(32vh - 4rem)" }
    }
    if (
      typeof window !== "undefined" &&
      window.innerWidth <= 450 &&
      typeof window !== "undefined" &&
      window.innerHeight <= 823
    ) {
      return { marginLeft: "2rem", maxHeight: "calc(36vh - 4rem)" }
    }

    if (typeof window !== "undefined" && window.innerWidth <= 780) {
      return { marginLeft: "2rem", maxHeight: "calc(30vh - 4rem)" }
    }
    if (typeof window !== "undefined" && window.innerWidth <= 1024) {
      return { marginLeft: "2rem", maxHeight: "calc(31vh - 4rem)" }
    }
    if (typeof window !== "undefined" && window.innerWidth <= 2000) {
      return { marginTop: "1rem", maxHeight: "calc(61vh - 4rem)" }
    }
  }
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
      <div className={BookingStyles.container}>
        <div className={BookingStyles.header}>
          <h1>Payment</h1>
        </div>
        <div className={BookingStyles.sidebar}>
          <Img
            className={BookingStyles.pic}
            imgStyle={{ objectFit: "cover" }}
            style={picSize()}
            fluid={fluid}
          />
        </div>
        <div className={BookingStyles.bookingContent}>
          <div className={BookingStyles.explanation}>
            <p>
              To get the most out of tutoring it is important for a student to
              have a regular consistant approach to the learning. We offer one
              off sessions but to get the most benifit we reccomend booking one
              of the packages that all come with discounts based on amount of
              sessions.
            </p>
          </div>
          <div className={BookingStyles.buttons}>
            <button
              className={ButtonStyles.buttons}
              onClick={redirectToCheckout2}
            >
              One Session
            </button>
            <button
              className={`${ButtonStyles.buttons} ${ButtonStyles.buttonsBronze}`}
              onClick={redirectToCheckout}
            >
              Bronze Package
            </button>
            <button
              className={`${ButtonStyles.buttons} ${ButtonStyles.buttonsSilver}`}
              onClick={redirectToCheckout3}
            >
              Silver Package
            </button>
            <button
              className={`${ButtonStyles.buttons} ${ButtonStyles.buttonsGold}`}
              onClick={redirectToCheckout4}
            >
              Gold Package
            </button>
          </div>

          <div className={BookingStyles.descriptions}>
            <h5>
              {" "}
              Single{" "}
              {typeof window !== "undefined" && window.innerWidth < 700 && (
                <br />
              )}{" "}
              Session
            </h5>
            <h5>
              Ten Sessions{" "}
              {typeof window !== "undefined" && window.innerWidth < 700 && (
                <br />
              )}{" "}
              10% discount
            </h5>
            <h5>
              Twenty Sessions{" "}
              {typeof window !== "undefined" && window.innerWidth < 700 && (
                <br />
              )}{" "}
              15% discount
            </h5>
            <h5>
              Thirty Sessions{" "}
              {typeof window !== "undefined" && window.innerWidth < 700 && (
                <br />
              )}{" "}
              20% discount
            </h5>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Booking
