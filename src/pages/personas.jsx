import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CardList from '../components/cardList';

const PersonasPage = ({ data }) => (
  <Layout>
    <SEO title="Personas" />
    <div className="container">
      <header className="head">
        <h2>Personas</h2>
        <p>Identified opportunities for delivering customer and business value.</p>
      </header>
      <hr />
      <CardList
        base="personas"
        data={data.allAirtable.edges}
      />
    </div>
  </Layout>
);

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Personas"}}) {
      edges {
        node {
          recordId
          data {
            Name
            Image {
              url
            }
            Icon {
              url
            }
            Colour
            Hidden
          }
        }
      }
    }
  }
`;

PersonasPage.defaultProps = {
  data: {},
};

PersonasPage.propTypes = {
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

export default PersonasPage;
