import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({data}) => {
  const company = data.airtable.data.Company
  
  return (
    <Layout>
      <div className='container'>
        <header>
          <h1>{company} Research Library</h1>
          <p>This library is a central resource containing {company}'s customer insights and hypotheses, as well as details of the research activities that informed them.</p>
        </header>

        <hr />

        <div className="four-col">
          <div className="col-xs-12 col-sm-6 col-lg-3">
            <Link to="/opportunities/" className="thumbnail">
              <div className="image" style={{backgroundColor:'#E6F8FC'}}>
                <img src="/icons/" width="100" alt=""/>
              </div>
              <div className="text">
                <h3>Opportunities</h3>
                <p>Identified opportunities for delivering customer and business value</p>
              </div>
            </Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-lg-3">
            <Link to="/concepts" className="thumbnail">
              <div className="image" style={{backgroundColor:'#FCF0EE'}}>
                <img src="/icons/" width="100" alt=""/>
              </div>
              <div className="text">
                <h3>Concepts</h3>
                <p>Potential solutions or interventions in response to the identified opportunities</p>
              </div>
            </Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-lg-3">
            <Link to="/personas" className="thumbnail">
              <div className="image" style={{backgroundColor:'#EEF0F7'}}>
                <img src="/icons/" width="100" alt=""/>
              </div>
              <div className="text">
                <h3>Personas</h3>
                <p>Representative customer types based on needs, goals and observed behaviors</p>
              </div>
            </Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-lg-3">
            <Link to="/studies" className="thumbnail">
              <div className="image" style={{backgroundColor:'#F0F9ED'}}>
                <img src="/icons/" width="100" alt=""/>
              </div>
              <div className="text">
                <h3>Studies</h3>
                <p>Overview of research and design studies carried out that informed this library</p>
              </div>
            </Link>
          </div>    
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql `
  {
    airtable(table: {eq: "Config"}) {
      data {
        Company
      }
    }
  }
`
export default IndexPage
