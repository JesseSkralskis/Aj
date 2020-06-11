import React from "react"
import { graphql, StaticQuery } from "gatsby"
export default function Skus(props) {
  return (
    <StaticQuery
      query={graphql`
        query SkusForProduct {
         products: allStripeProduct {
            edges {
              node {
                name
              }
            }
          }
        }
      `}
      render={({ products }) => (
        <div>
          {products.edges.map(({ node: sku }) => (
            <p key={sku.id}>{sku.attributes.name}</p>
          ))}
        </div>
      )}
    />
  )
}
