import React from 'react';
import PropTypes from 'prop-types';

import Badges from './badges';

const Hero = ({
  imgUrl,
  recordId,
  location,
  title,
  attributes,
  personas,
}) => (
  <header>
    { imgUrl && <img src={imgUrl} width="100%" alt="" /> }
    <div className="container">
      <div className="options">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={recordId && `https://airtable.com/tblNJ0JhIFJEji8Hh/viws2I7nuQKNkZYHb/${recordId}`}
          className="external"
        >
          View in Airtable
        </a>
      </div>
      <h2 className="subtitle">{location}</h2>
      <h3 className="headline">{title}</h3>
      <Badges
        attributes={attributes || []}
        personas={personas || []}
      />
    </div>
  </header>
);

Hero.defaultProps = {
  attributes: [],
  personas: [],
};

Hero.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  recordId: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  attributes: PropTypes.arrayOf(
    PropTypes.string,
  ),
  personas: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.shape({
        Label: PropTypes.string,
      }),
    }),
  ),
};

export default Hero;
