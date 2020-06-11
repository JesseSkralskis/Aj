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
    lineItems: [{ price: "price_1GrnTJCmetnbxKY09ukENd08", quantity: 1 }],
    successUrl: `http://localhost:8000/`,
    cancelUrl: `http://localhost:8000/`,
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
    lineItems: [{ price: "price_1Grq2nCmetnbxKY0YFa9GSLA", quantity: 1 }],
    successUrl: `http://localhost:8000/`,
    cancelUrl: `http://localhost:8000/`,
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
    lineItems: [{ price: "price_1GrqGeCmetnbxKY0XpGwHyUw", quantity: 1 }],
    successUrl: `http://localhost:8000/`,
    cancelUrl: `http://localhost:8000/`,
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
    lineItems: [{ price: "price_1GrqKLCmetnbxKY0tQ7cSmuB", quantity: 1 }],
    successUrl: `http://localhost:8000/`,
    cancelUrl: `http://localhost:8000/`,
    mode: "payment",
  })

  if (error) {
    console.warn("Error:", error)
  }
}

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
      <Helmet></Helmet>
      <div className={BookingStyles.container}>
        <div className={BookingStyles.header}>
          <h1>Payment</h1>
        </div>
        <div className={BookingStyles.sidebar}>
          <Img style={{}} imgStyle={{ objectFit: "cover" }} fluid={fluid} />
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
            <h5> One Session with no discount</h5>
            <h5>Ten Sessions 10% discount</h5>
            <h5>Twenty Sessions 15% discount</h5>
            <h5>Thirty Sessions 20% discount</h5>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Booking
