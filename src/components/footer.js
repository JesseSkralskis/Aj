import React from 'react'
import { Helmet } from "react-helmet"
const Footetr = () => {
    return (
      <footer
        style={{
          display: "flex",
          background: "rgb(220, 229, 240)",
        }}
      >
        <Helmet>
          <script
            src="https://kit.fontawesome.com/8781c2ec8e.js"
            crossorigin="anonymous"
          ></script>
        </Helmet>

        <p
          style={{
            justifyContent: "center",
            margin: "0 auto",

            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <a
            href="https://www.facebook.com/aj.newball"
            style={{
              marginRight: "3rem",
            }}
          >
            <i class="fab fa-facebook-square fa-lg"></i>
          </a>{" "}
                <small
                    style={{
                        fontSize: '70%'
                    }}
                >AJ's professional tutoring © 2019</small>
        </p>
      </footer>
    )
}
 
export default Footetr;