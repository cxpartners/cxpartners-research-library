import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';

const concepts = ({
  data,
  pageContext,
}) => {
  const d = data.airtable.data;

  return (
    <Layout>
      <SEO title={d.Name} />
      <Hero
        imgUrl={d.Image && d.Image[0].url}
        recordId={pageContext.recordId}
        location="Concepts"
        title={d.Name}
      />
      <div className="container">
        <h4>Summary</h4>
        <p>{ d.Description }</p>
        { d.Illustration && (
          <div>
            <hr />
            <h4>Illustrations</h4>
            { d.Illustration.map((illustration) => (
              <div>
                <a
                  className="thumbnail"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={illustration.url}
                >
                  <div className="image">
                    <img src={illustration.url} width="150px" alt="" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
        <hr />
        <h4>Research Learnings</h4>
        <p>{ d.Learnings }</p>
        <hr />
        <h4>Customer Quotes</h4>
        <blockquote>
          <p>{ d.User_Comments }</p>
        </blockquote>
      </div>
    </Layout>
  );
};

export const query = graphql`
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
`;

concepts.defaultProps = {
  data: {},
  pageContext: {},
};

concepts.propTypes = {
  data: PropTypes.shape({
    airtable: PropTypes.shape({
      data: PropTypes.shape({
        Name: PropTypes.string,
        Image: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string,
          }),
        ),
        Description: PropTypes.string,
        Illustration: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string,
          }),
        ),
        Learnings: PropTypes.string,
        User_Comments: PropTypes.string,
      }),
    }),
  }),
  pageContext: PropTypes.shape({
    recordId: PropTypes.string,
  }),
};

export default concepts;
