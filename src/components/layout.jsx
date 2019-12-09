import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import '../styles/scss/App.scss';

import SEO from './seo';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        airtable(table: {eq: "Config"}) {
          data {
            Logo {
              url
            }
            Brand_Colour__Primary_
          }
        }
      }
    `}
    render={(data) => (
      <>
        <SEO title="Research Library" />
        <Header
          logo={data.airtable.data.Logo[0].url}
        />
        <>
          <main className="main">
            <div className="content-wrapper">
              {children}
            </div>
          </main>
          <Footer
            brandColour={data.airtable.data.Brand_Colour__Primary_}
          />
        </>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
