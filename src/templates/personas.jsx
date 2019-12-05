import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';

const personas = ({ data, pageContext }) => {
  const d = data.airtable.data;

  return (
    <Layout>
      <SEO title={`${d.Label}: ${d.Name}`} />
      <Hero
        imgUrl={d.Image && d.Image[0].url}
        recordId={pageContext.recordId}
        location="Personas"
        label={d.Label}
        title={d.Name}
      />
      <div className="container">
        <h4>Summary</h4>
        <p>{ d.Notes && d.Notes }</p>
        { d.Image && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={d.Diagram && d.Diagram[0].url}
          >
            <div className="persona-img">
              <img src={d.Diagram && d.Diagram[0].url} width="100%" alt="" />
            </div>
          </a>
        )}
        <hr />
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    airtable(table: {eq: "Personas"}) {
      data {
        Name
        Label
        Notes
        Image {
          url
        }
        Colour
        Diagram {
          url
        }
      }
    }
  }
`;

personas.defaultProps = {
  data: {},
  pageContext: {},
};

personas.propTypes = {
  data: PropTypes.shape({
    airtable: PropTypes.shape({
      data: PropTypes.shape({
        Name: PropTypes.string,
        Label: PropTypes.string,
        Notes: PropTypes.string,
        Image: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string,
          }),
        ),
        Colour: PropTypes.string,
        Diagram: PropTypes.arrayOf(
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

export default personas;
