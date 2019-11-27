import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Header = ({
  logo,
  brandColour,
}) => {
  const [showNavbar, navbarToggle] = useState(false);

  return (
    <header>
      <nav
        className="navbar navbar-inverse navbar-expand-lg"
        style={{ background: brandColour }}
      >
        <Link to="/" className="navbar-brand navbar-left">
          <img src={logo} alt="" className="navbar__logo" />
        </Link>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={() => navbarToggle(!showNavbar)}>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div className={showNavbar ? 'navbar-right' : 'navbar-right collapse'} id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="nav__item">
                <Link to="/" className="nav__link" activeClassName="nav__link--active">Home</Link>
              </li>
              <li className="nav__item">
                <Link to="/opportunities" className="nav__link" activeClassName="nav__link--active">Opportunities</Link>
              </li>
              <li className="nav__item">
                <Link to="/concepts" className="nav__link" activeClassName="nav__link--active">Concepts</Link>
              </li>
              <li className="nav__item">
                <Link to="/personas" className="nav__link" activeClassName="nav__link--active">Personas</Link>
              </li>
              <li className="nav__item">
                <Link to="/studies" className="nav__link" activeClassName="nav__link--active">Studies</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.defaultProps = {
  brandColour: '#FFF',
};

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  brandColour: PropTypes.string,
};

export default Header;
