import React from 'react';
import PropTypes from 'prop-types';

const shortid = require('shortid');

const Badges = ({
  attributes,
  personas,
}) => (
  <>
    { (attributes.length > 0 || personas.length > 0) && (
      <p className="badges">
        { attributes.length > 0 && attributes.map((attribute) => (
          <span key={shortid.generate()}>{ attribute }</span>
        ))}
        { personas.length > 0 && personas.map((persona) => (
          <span key={shortid.generate()}>{persona.data.Label || persona.data.Name}</span>
        ))}
      </p>
    )}
  </>
);

Badges.propTypes = {
  attributes: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  personas: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.shape({
        Label: PropTypes.string,
      }),
    }),
  ).isRequired,
};

export default Badges;
