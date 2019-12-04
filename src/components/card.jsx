import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Badges from './badges';

const Card = ({
  recordId,
  base,
  backgroundColor,
  priority,
  image,
  illustration,
  name,
  attributes,
  personas,
}) => (
  <li key={recordId} className="thumbnail">
    <Link to={`/${base}/${recordId}`}>
      <div className="image" style={{ backgroundColor }}>
        { priority && <span className="priority">PRIORITY</span> }
        { image && <img src={image} height="110" alt="" />}
        { illustration && <img src={illustration} width="150" alt="" />}
      </div>
      <div className="text">
        <h3>{ name }</h3>
        <Badges
          attributes={attributes || []}
          personas={personas || []}
        />
      </div>
    </Link>
  </li>
);

Card.defaultProps = {
  base: '',
  backgroundColor: '#FFF',
  priority: false,
  image: '',
  illustration: '',
  attributes: [],
  personas: [],
};

Card.propTypes = {
  recordId: PropTypes.string.isRequired,
  base: PropTypes.string,
  backgroundColor: PropTypes.string,
  priority: PropTypes.bool,
  image: PropTypes.string,
  illustration: PropTypes.string,
  name: PropTypes.string.isRequired,
  attributes: PropTypes.arrayOf(
    PropTypes.string,
  ),
  personas: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.shape({
        Name: PropTypes.string,
      }),
    }),
  ),
};

export default Card;
