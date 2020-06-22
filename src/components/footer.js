import React from "react"
import { Helmet } from "react-helmet"
import FooterStyles from "../styles/components/footer.module.scss"
const Footetr = () => {
  return (
    <footer className={FooterStyles.container}>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/8781c2ec8e.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>

      <h4>Phone Number: 1-510-229-0949</h4>
      <h4>Email: aj@ajmathguru.com</h4>

      {/* <p style={{}}>
        <a href="https://www.facebook.com/aj.newball">
          <i
            style={{
              color: "black",
            }}
            class="fab fa-facebook-square fa-lg"
          ></i>
        </a>{" "}
        <small
          style={{
            color: "black",
            fontSize: "70%",
          }}
        >
          AJ's professional tutoring © 2020
        </small>
      </p> */}
    </footer>
  )
}

export default Footetr
