import { Link } from 'gatsby'
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import React, { useState } from 'react'

const Header = ({data}) => {
  const [showNavbar, navbarToggle] = useState(false)
  const airtable = data.airtable.data

  return (
    <header>
      <nav className='navbar navbar-inverse .navbar-expand-lg'>
        <Link to='/' className='navbar-brand navbar-left'>
          <img src='{airtable.Logo}' alt='' id='logo'/>
        </Link>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' onClick={() => navbarToggle( showNavbar ? false : true )}>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>  
            </button>
          </div>
          <div className={ showNavbar ? 'navbar-right' : 'navbar-right collapse' } id="myNavbar">
            <ul className='nav navbar-nav'>
              <li className='nav__item'>
                <Link to='/' className='nav__link' activeClassName='nav__link--active'>Home</Link>
              </li>
              <li className='nav__item'>
                <Link to='/opportunities' className='nav__link' activeClassName='nav__link--active'>Opportunities</Link>
              </li>
              <li className='nav__item'>
                <Link to='/concepts' className='nav__link' activeClassName='nav__link--active'>Concepts</Link>
              </li>         
              <li className='nav__item'>
                <Link to='/personas' className='nav__link' activeClassName='nav__link--active'>Personas</Link>
              </li>
              <li className='nav__item'>
                <Link to='/studies' className='nav__link' activeClassName='nav__link--active'>Studies</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export const query = graphql `
  {
    airtable(table: {eq: "Config"}) {
      data {
        Logo
      }
    }
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
