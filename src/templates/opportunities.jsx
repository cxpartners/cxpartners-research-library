import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Insights from '../components/insights';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Card from '../components/card';

const opportunities = ({ data, pageContext }) => {
  const d = data.airtable.data;

  return (
    <Layout>
      <SEO title={d.Name} />
      <Hero
        imgUrl={d.Image && d.Image[0].url}
        recordId={pageContext.recordId}
        location="Opportunities"
        title={d.Name}
        attributes={d.Attributes ? d.Attributes : []}
        personas={d.Personas ? d.Personas : []}
      />
      <div className="container">
        <h4>Summary</h4>
        <p>{ d.Summary }</p>
        <hr />
        <h4>Business Value</h4>
        <p>{ d.Business_Value }</p>
        <hr />
        { d.Story_1__Legacy_ && (
          <>
            <h4>Stories</h4>
            <div className="thumbnail">
              <div className="image">
                <a target="_blank" rel="noopener noreferrer" href={d.Story_1_Images___Legacy_[0].url}>
                  <img src={d.Story_1_Images___Legacy_[0].url} width="400" alt="" />
                </a>
              </div>
              <div className="text">
                <h5>Story</h5>
                <p className="small">{ d.Story_1__Legacy_ }</p>
              </div>
            </div>
          </>
        )}
        <hr />
        <h4>Design Challenges</h4>
        <p className="secondary">{ d.Design_Challenge }</p>
        <hr />
        { d.Example_Concepts && (
          <>
            <h4>Concepts</h4>
            <div>
              <Card
                base="concepts"
                recordId={d.Example_Concepts[0].recordId}
                illustration={d.Example_Concepts[0].data.Illustration
                  && d.Example_Concepts[0].data.Illustration[0].url}
                name="Concepts"
                description={d.Example_Concepts[0].data.Name}
              />
            </div>
            <hr />
          </>
        )}
        { d.Key_Insights && <Insights title="Key Insights" insights={d.Key_Insights} />}
        { d.Supporting_Insights && <Insights title="Supporting Insights" insights={d.Key_Insights} />}
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
