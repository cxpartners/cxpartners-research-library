import React from 'react';
import PropTypes from 'prop-types';

import GitHubIcon from '../images/github.svg';
import Logo from '../images/cxpartners-logo.svg';


const Footer = ({ brandColour }) => (
  <footer className="footer" style={{ background: brandColour }}>
    <nav className="footer-nav">
      <a
        href="https://cxpartners.co.uk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Logo />
      </a>
      <a
        href="https://github.com/cxpartners/cxpartners-research-library"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </a>
    </nav>
  </footer>
);

Footer.defaultProps = {
  brandColour: '#FFF',
};

Footer.propTypes = {
  brandColour: PropTypes.string,
};

export default Footer;
