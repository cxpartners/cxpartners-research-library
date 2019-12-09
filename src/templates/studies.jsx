import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';

const studies = ({ data, pageContext }) => {
  const d = data.airtable.data;
  console.log('data', d);

  return (
    <Layout>
      <SEO title={d.Name} />
      <Hero
        imgUrl={d.Image && d.Image[0].url}
        baseUrl="/studies"
        recordId={pageContext.recordId}
        location="Studies"
        title={d.Name}
      />
      <div className="container">
        <h4>Summary</h4>
        <p>{ d.Summary }</p>
        <hr />
        <h4>What we did</h4>
        <p>{ d.Process }</p>
        { d.Images && d.Images.map((image) => (
          <div key={image.id}>
            <a target="_blank" rel="noopener noreferrer" href={image.url} className="thumbnail pop">
              <img src={image.url} alt="" />
              <p>{ image.filename }</p>
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    airtable(table: {eq: "Studies"}) {
      data {
        Name
        Image {
          url
        }
        Summary
        Process
        Images {
          id
          url
          filename
        }
        Colour
      }
    }
  }
`;

studies.defaultProps = {
  data: {},
  pageContext: {},
};

studies.propTypes = {
  data: PropTypes.shape({
    airtable: PropTypes.shape({
      data: PropTypes.shape({
        Name: PropTypes.string,
        Image: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string,
          }),
        ),
        Summary: PropTypes.string,
        Process: PropTypes.string,
        Images: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
            url: PropTypes.string,
            filename: PropTypes.string,
          }),
        ),
        Colour: PropTypes.string,
      }),
    }),
  }),
  pageContext: PropTypes.shape({
    recordId: PropTypes.string,
  }),
};

export default studies;
