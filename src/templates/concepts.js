import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({data, pageContext}) => {
  const item = data.airtable.data
  
  return (
    <Layout>
      <SEO title={ item.Name }/>
      <header className="masthead">    
        <img src={ item.Image && item.Image[0].url } width="100%" alt=""/>
        <div className="container">
          <div className="title">
            <div className="options">
              <button className="back" onClick={ () => window.history.back() }>
                <span className="glyphicon glyphicon-menu-left"></span>
                <span className="text">Back</span>
              </button>
              <a target='_blank' rel="noopener noreferrer"  href={pageContext.recordId && `https://airtable.com/tblNJ0JhIFJEji8Hh/viws2I7nuQKNkZYHb/${pageContext.recordId}`} className="external">View in Airtable</a>
            </div>
            <h4>Concept</h4>
            <h1>{ item.Name }</h1>
          </div>
        </div>    
      </header>

      <div className="container">
    
        <div className="one-col">

          <h2>Summary</h2>
          <p>{ item.Description }</p>        

          { item.Illustration && (
            <div>
              <hr />
              <h2>Illustrations</h2>
              { item.Illustration.map((illustration, index) => (
                <div className="three-col" key={ index }>
                  <a target="_blank" rel="noopener noreferrer" href={ illustration.url } className="thumbnail pop">
                    <div className="image">
                      <img src={ illustration.url } width='150px' alt=''/>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          )}

          <hr />

          <h2>Research Learnings</h2>
          
          <p>{ item.Learnings }</p>
        
          <hr />

          <h2>Customer Quotes</h2>
          
          <blockquote>
            <p>{ item.User_Comments }</p>
          </blockquote>
            
        </div>
          
      </div>
    </Layout>
  )
}

export const query = graphql `
  {
    airtable(table: {eq: "Concepts"}) {
      data {
        Name
        Image {
          url
        }
        Description
        Illustration {
          url
        }
        Learnings
        User_Comments
      }
    }
  }
`