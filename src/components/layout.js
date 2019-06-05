/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "../styles/scss/App.scss"

import Header from "./header"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        airtable(table: {eq: "Config"}) {
          data {
            Logo {
              url
            }
            Brand_Colour__Primary_
          }
        }
      }
    `}
    render={data => (
      <>
        <Header logo={data.airtable.data.Logo[0].url} brandColour={data.airtable.data.Brand_Colour__Primary_} />
        <div>
          <main className='main'>
            <div className='content-wrapper'>
              {children}
            </div>
          </main>
          <footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
