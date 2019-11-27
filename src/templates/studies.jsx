import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const studies = ({ data, pageContext }) => {
  const item = data.airtable.data;

  return (
    <Layout>
      <SEO title={item.Name} />
      <header className="masthead" style={{ backgroundColor: item.Colour }}>
        <img src={item.Image && item.Image[0].url} width="100%" alt="" />
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
                href={pageContext.recordId && `https://airtable.com/tblmB3GpSAgCNKqnY/viwZi3c8qOXxlLza2/${pageContext.recordId}`}
                className="external"
              >
                View in Airtable
              </a>
            </div>
            <h4>Study</h4>
            <h1>{ item.Name }</h1>
          </div>
        </div>
      </header>
      <div className="container">
        <h2>Summary</h2>
        <p className="secondary" data-toggle="tooltip" title="Tooltip">{ item.Summary }</p>
        <h2>What we did</h2>
        <p className="secondary">{ item.Process }</p>
        { item.Images && item.Images.map((image) => (
          <div key={image.id} className="three-col gallery">
            <a target="_blank" rel="noopener noreferrer" href={image.url} className="thumbnail pop">
              <img src={image.url} alt="" />
              <p className="secondary">{ image.filename }</p>
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
      }),
    }),
  }),
  pageContext: PropTypes.shape({
    recordId: PropTypes.string,
  }),
};

export default studies;
