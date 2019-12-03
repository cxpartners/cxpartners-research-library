import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CardList from '../components/cardList';

const StudiesPage = ({ data }) => (
  <Layout>
    <SEO title="Studies" />
    <div className="container">
      <header>
        <h1>Studies</h1>
        <p>
          Overview of research and design studies carried out
          that informed the content of this library.
        </p>
      </header>
      <hr />
      <CardList
        base="studies"
        data={data.allAirtable.edges}
      />
    </div>
  </Layout>
);

export const query = graphql`
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
`;

StudiesPage.defaultProps = {
  data: {},
};

StudiesPage.propTypes = {
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

export default StudiesPage;
