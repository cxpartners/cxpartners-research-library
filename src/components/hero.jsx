import React from 'react';
import PropTypes from 'prop-types';

import Badges from './badges';

const Hero = ({
  imgUrl,
  recordId,
  location,
  label,
  title,
  attributes,
  personas,
}) => (
  <header>
    { imgUrl && <div className="hero-image" style={{ backgroundImage: `url(${imgUrl})` }} /> }
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
      <h3 className="headline">{ label ? `${label}: ${title}` : title}</h3>
      <Badges
        attributes={attributes || []}
        personas={personas || []}
      />
    </div>
  </header>
);

Hero.defaultProps = {
  label: '',
  attributes: [],
  personas: [],
};

Hero.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  recordId: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  label: PropTypes.string,
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
