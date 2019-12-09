import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Header = ({
  logo,
}) => {
  const [showNavbar, navbarToggle] = useState(false);

  return (
    <header className="header">
      <nav
        className="nav-container"
      >
        <Link to="/" className="logo">
          <h1>
            <img src={logo} alt="" />
          </h1>
        </Link>
        <div className={`nav-list nav-list-${showNavbar ? 'active' : ''}`}>
          <button
            type="button"
            className={`hamburger hamburger--spin ${showNavbar ? 'is-active' : ''}`}
            onClick={() => navbarToggle(!showNavbar)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
          <ul>
            <li>
              <Link to="/" activeClassName="">Home</Link>
            </li>
            <li>
              <Link to="/opportunities" activeClassName="link-active">Opportunities</Link>
            </li>
            <li>
              <Link to="/concepts" activeClassName="link-active">Concepts</Link>
            </li>
            <li>
              <Link to="/personas" activeClassName="link-active">Personas</Link>
            </li>
            <li>
              <Link to="/studies" activeClassName="link-active">Studies</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Header;
