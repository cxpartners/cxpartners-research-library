import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Thumbnail = ({
  link,
  backgroundColor,
  icon,
  header,
  description,
}) => (
  <Link to={link} className="thumbnail">
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
);

Thumbnail.propTypes = {
  link: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Thumbnail;
