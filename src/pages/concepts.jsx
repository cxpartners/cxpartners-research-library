import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CardList from '../components/cardList';

const ConceptsPage = ({ data }) => (
  <Layout>
    <SEO title="Concepts" />
    <div className="container">
      <header className="head">
        <h2>Concepts</h2>
        <p>Potential solutions or interventions in response to the identified opportunities.</p>
      </header>
      <hr />
      <CardList
        base="concepts"
        data={data.allAirtable.edges}
      />
    </div>
  </Layout>
);

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Concepts"}}) {
      edges {
        node {
          recordId
          data {
            Name
            Image {
              url
            }
            Illustration {
              url
            }
            Hidden
          }
        }
      }
    }
  }
`;

ConceptsPage.defaultProps = {
  data: {},
};

ConceptsPage.propTypes = {
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

export default ConceptsPage;
