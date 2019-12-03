import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const shortid = require('shortid');

const Thumbnail = ({
  link,
  backgroundColor,
  icon,
  header,
  description,
}) => (
  <li key={shortid.generate()} className="thumbnail">
    <Link to={link}>
      <div className="image" style={{ backgroundColor }}>
        <img src={icon} width="100" alt="" />
      </div>
      <div className="text">
        <h3>{ header }</h3>
        <p>
          { description }
        </p>
      </div>
    </Link>
  </li>
);

Thumbnail.propTypes = {
  link: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Thumbnail;
