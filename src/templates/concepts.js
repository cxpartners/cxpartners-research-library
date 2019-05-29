import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({data}) => {
	console.log(data)
  return (
    <Layout>
      <div>Concepts</div>
    </Layout>
  )
}

export const query = graphql `
  {
    airtable(table: {eq: "Concepts"}) {
      data {
        Name
      }
    }
  }
`