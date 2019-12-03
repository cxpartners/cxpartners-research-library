import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CardList from '../components/cardList';

const OpportunitiesPage = ({ data }) => (
  <Layout>
    <SEO title="Opportunities" />
    <div className="container">
      <header>
        <h1>Opportunities</h1>
        <p>Identified opportunities for delivering customer and business value.</p>
      </header>
      <hr />
      <CardList
        base="opportunities"
        data={data.allAirtable.edges}
      />
    </div>
  </Layout>
);

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
  data: PropTypes.shape({
    allAirtable: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            recordId: PropTypes.string,
          }),
        }),
      ),
    }),
  }),
};

export default OpportunitiesPage;
