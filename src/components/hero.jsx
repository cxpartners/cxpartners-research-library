import React from 'react';
import PropTypes from 'prop-types';

import Badges from './badges';
import randomColour from '../utils/randomColour';

const Hero = ({
  imgUrl,
  backgroundColour,
  recordId,
  location,
  label,
  title,
  attributes,
  personas,
}) => {
  const colour = backgroundColour || randomColour();
  return (
    <header>
      { imgUrl && <div className="hero-image" style={{ backgroundImage: `url(${imgUrl})` }} /> }
      { !imgUrl && <div className="hero-divider" style={{ backgroundColor: colour }} />}
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
};

Hero.defaultProps = {
  imgUrl: '',
  backgroundColour: '',
  label: '',
  attributes: [],
  personas: [],
};

Hero.propTypes = {
  imgUrl: PropTypes.string,
  backgroundColour: PropTypes.string,
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
