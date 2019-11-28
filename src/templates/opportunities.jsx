import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import Insights from '../components/insights';
import SEO from '../components/seo';

const opportunities = ({ data, pageContext }) => {
  const item = data.airtable.data;

  return (
    <Layout>
      <SEO title={item.Name} />
      <header className="masthead" style={{ backgroundColor: item.Colour }}>
        <img src={item.Image && item.Image[0].url} height="60%" alt="" />
        <div className="container">
          <div className="title">
            <div className="options">
              <button
                type="button"
                className="back"
                onClick={() => window.history.back()}
              >
                <span className="glyphicon glyphicon-menu-left" />
                <span className="text">Back</span>
              </button>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={pageContext.recordId && `https://airtable.com/tblxlnayTnSiUWwL4/viwnmGoyEAmF3YgDV/${pageContext.recordId}`}
                className="external"
              >
                View in Airtable
              </a>
            </div>
            <h4>Opportunity</h4>
            <h1>{item.Name}</h1>
            <p
              className="badges"
              data-toggle="tooltip"
              title="Opportunities"
            >
              { item.Attributes && item.Attributes.map((attribute) => (
                <span className="badge badge-pill badge-primary">{ attribute }</span>
              ))}
              { item.Personas && item.Personas.map((persona) => (
                <span className="badge badge-pill badge-secondary">{ persona.data.Label }</span>
              ))}
            </p>
          </div>
        </div>
      </header>
      <div className="container">
        <h2>Summary</h2>
        <p className="secondary" data-toggle="tooltip" title="Tooltip">{ item.Summary }</p>
        <hr />
        <h2>Business Value</h2>
        <p className="secondary">{ item.Business_Value }</p>
        <hr />
        { item.Story_1__Legacy_ && (
          <>
            <h2>Stories</h2>
            { item.Story_1_Images___Legacy_ && (
              <div className="three-col">
                <div className="thumbnail">
                  <div className="image" data-toggle="tooltip" title="Opportunities">
                    <a target="_blank" rel="noopener noreferrer" href={item.Story_1_Images___Legacy_[0].url}>
                      <img src={item.Story_1_Images___Legacy_[0].url} width="400" alt="" />
                    </a>
                  </div>
                  <div className="text">
                    <h5 data-toggle="tooltip" title="Opportunities">Story</h5>
                    <p className="small">{ item.Story_1__Legacy_ }</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        <hr />
        <h2>Design Challenges</h2>
        <p className="secondary">{ item.Design_Challenge }</p>
        { item.Example_Concepts && (
          <>
            <hr />
            <h2>Concepts</h2>
            <div className="three-col">
              <Link to={`/concepts/${item.Example_Concepts[0].recordId}`} className="thumbnail">
                <div className="image" data-toggle="tooltip" title="Opportunities ">
                  { item.Example_Concepts[0].data.Illustration && (
                    <img src={item.Example_Concepts[0].data.Illustration[0].url} width="400" alt="" />
                  )}
                </div>
                <div className="text">
                  <h5 data-toggle="tooltip" title="Opportunities">Concept</h5>
                  <p className="small">{ item.Example_Concepts[0].data.Name }</p>
                </div>
              </Link>
            </div>
          </>
        )}
        <hr />
        { item.Key_Insights && <Insights title="Key Insights" insights={item.Key_Insights} />}
        { item.Supporting_Insights && <Insights title="Supporting Insights" insights={item.Key_Insights} />}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query getData($recordId: String) {
    airtable(table: {eq: "Opportunities"}, recordId: {eq: $recordId }) {
      data {
        Name
        Image {
          url
        }
        Colour
        Hidden
        Summary
        Business_Value
        Design_Challenge
        Example_Concepts {
          recordId
          data {
            Name
            Illustration {
              url
            }
          }
        }
        Attributes
        Personas {
          data {
            Name
            Label
          }
        }
        Key_Insights {
          recordId
          data {
            Insight
          }
        }
        Supporting_Insights {
          recordId
          data {
            Insight
          }
        }
        Story_1__Legacy_
        Story_1_Images___Legacy_ {
          url
        }
      }
    }
  }
`;

opportunities.defaultProps = {
  data: {},
  pageContext: {},
};

opportunities.propTypes = {
  data: PropTypes.shape({
    airtable: PropTypes.shape({
      data: PropTypes.shape({
        Name: PropTypes.string,
        Image: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string,
          }),
        ),
        Colour: PropTypes.string,
        Hidden: PropTypes.bool,
        Summary: PropTypes.string,
        Business_Value: PropTypes.string,
        Design_Challenge: PropTypes.string,
        Example_Concepts: PropTypes.arrayOf(
          PropTypes.shape({
            recordId: PropTypes.string,
            data: PropTypes.shape({
              Name: PropTypes.string,
              Illustration: PropTypes.arrayOf(
                PropTypes.shape({
                  url: PropTypes.string,
                }),
              ),
            }),
          }),
        ),
        Attributes: PropTypes.string,
        Personas: PropTypes.arrayOf(
          PropTypes.shape({
            data: PropTypes.shape({
              Name: PropTypes.string,
              Label: PropTypes.string,
            }),
          }),
        ),
        Key_Insights: PropTypes.arrayOf(
          PropTypes.shape({
            recordId: PropTypes.string,
            data: PropTypes.shape({
              Insight: PropTypes.string,
            }),
          }),
        ),
        Supporting_Insights: PropTypes.arrayOf(
          PropTypes.shape({
            recordId: PropTypes.string,
            data: PropTypes.shape({
              Insight: PropTypes.string,
            }),
          }),
        ),
        Story_1__Legacy_: PropTypes.string,
        Story_1_Images___Legacy_: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string,
          }),
        ),
      }),
    }),
  }),
  pageContext: PropTypes.shape({
    recordId: PropTypes.string,
  }),
};

export default opportunities;