import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Card from '../components/card'
import SEO from '../components/seo'

const PersonasPage = ({ data }) => {
  const list = data.allAirtable.edges

  return (
    <Layout>
      <SEO title="Personas" />
      <div className="container">
        <header>
          <h1>Personas</h1>
          <p>Identified opportunities for delivering customer and business value.</p>
        </header>

        <hr />
        <div className="row">
        { list && <Card base='personas' cards={list}/> }
        </div>    
      </div>
    </Layout>

  )
}

export const query = graphql `
  {
    allAirtable(filter: {table: {eq: "Personas"}}) {
      edges {
        node {
          recordId
          data {
            Name
            Image {
              url
            }
            Colour
            Hidden
          }
        }
      }
    }
  }
`

export default PersonasPage