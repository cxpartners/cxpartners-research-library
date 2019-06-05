import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Card from '../components/card'

const ConceptsPage = ({ data }) => {
  const list = data.allAirtable.edges

  return (
    <Layout>
      <div className="container">
        <header>
          <h1>Concepts</h1>
           <p>Potential solutions or interventions in response to the identified opportunities.</p>
        </header>

        <hr />
        <div className="row">
        { list && <Card base='concepts' cards={list}/> }
        </div>    
      </div>
    </Layout>

  )
}

export const query = graphql `
  {
    allAirtable(filter: {table: {eq: "Concepts"}}) {
      edges {
        node {
          recordId
          data {
            Name
            Illustration {
              url
            }
            Hidden
          }
        }
      }
    }
  }
`

export default ConceptsPage