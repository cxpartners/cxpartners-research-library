import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Personas = ({ data, pageContext }) => {
  const item = data.airtable.data;

  return (
    <Layout>
      <SEO title={`${item.Label}: ${item.Name}`} />
      <header className="masthead" style={{ backgroundColor: item.Colour }}>
        <img src={item.Image && item.Image[0].url} width="20%" alt="" />
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
                className="external"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://airtable.com/tbl4zDvg1zEuS33j6/viwluHJfuYdcVx7HR/${pageContext.recordId}`}
                key={pageContext.recordId}
              >
                View in Airtable
              </a>
            </div>
            <h1>{`${item.Label}: ${item.Name}`}</h1>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="one-col">
          <h2>Summary</h2>
          <p>{ item.Notes && item.Notes }</p>
          { item.Image && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={item.Diagram && item.Diagram[0].url}
            >
              <div className="persona-img">
                <img src={item.Diagram && item.Diagram[0].url} width="100%" alt="" />
              </div>
            </a>
          )}
        </div>
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

Personas.defaultProps = {
  data: {},
  pageContext: {},
};

Personas.propTypes = {
  data: PropTypes.shapeOf({
    airtable: PropTypes.shapeOf({
      data: PropTypes.shapeOf({
        Name: PropTypes.string,
      }),
    }),
  }),
  pageContext: PropTypes.shapeOf({
    recordId: PropTypes.string,
  }),
};

export default Personas;
