import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const shortid = require('shortid');

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
  <div key={recordId}>
    <Link to={`/${base}/${recordId}`} className="thumbnail">
      <div className="image" style={{ backgroundColor }}>
        { priority && <span className="priority">PRIORITY</span> }
        { image && <img src={image} height="110" alt="" />}
        { illustration && <img src={illustration} width="150" alt="" />}
      </div>
      <div className="text">
        <h3>{ name }</h3>
        <p className="badges">
          { attributes && attributes.map((attribute) => (
            <span key={shortid.generate()} className="">{ attribute }</span>
          ))}
          { personas && personas.map((persona) => (
            <span key={shortid.generate()} className="">{persona.data.Name}</span>
          ))}
        </p>
      </div>
    </Link>
  </div>
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
