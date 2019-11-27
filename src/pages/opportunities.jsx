import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Card from '../components/card';
import SEO from '../components/seo';

const OpportunitiesPage = ({ data }) => {
  const list = data.allAirtable.edges;

  return (
    <Layout>
      <SEO title="Opportunities" />
      <div className="container">
        <header>
          <h1>Opportunities</h1>
          <p>Identified opportunities for delivering customer and business value.</p>
        </header>
        <hr />
        <div className="row">
          { list && <Card base="opportunities" cards={list} /> }
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Opportunities"}}) {
      edges {
        node {
          recordId
          data {
            Name
            Image {
              url
            }
            Colour
            Priority
            Hidden
            Attributes
            Personas {
              data {
                Name
              }
            }
          }
        }
      }
    }
  }
`;

OpportunitiesPage.defaultProps = {
  data: {},
};

OpportunitiesPage.propTypes = {
  data: PropTypes.shapeOf({
    allAirtable: PropTypes.shapeOf({
      edges: PropTypes.shapeOf({
        node: PropTypes.shapeOf({
          recordId: PropTypes.string,
        }),
      }),
    }),
  }),
};

export default OpportunitiesPage;
