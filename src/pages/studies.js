import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Card from '../components/card'
import SEO from '../components/seo'

const StudiesPage = ({ data }) => {
  const list = data.allAirtable.edges

  return (
    <Layout>
    <SEO title="Studies" />
      <div className="container">
        <header>
          <h1>Studies</h1>
          <p>Overview of research and design studies carried out that informed the content of this library.</p>
        </header>

        <hr />
        <div className="row">
        { list && <Card base='studies' cards={list}/> }
        </div>    
      </div>
    </Layout>

  )
}

export const query = graphql `
  {
    allAirtable(filter: {table: {eq: "Studies"}}) {
      edges {
        node {
          recordId
          data {
            Name
            Image {
              url
            }
            Hidden
          }
        }
      }
    }
  }
`

export default StudiesPage