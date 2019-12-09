import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Badges from './badges';

import randomColour from '../utils/randomColour';

const Card = ({
  recordId,
  recordUrl,
  base,
  backgroundColor,
  priority,
  image,
  icon,
  illustration,
  name,
  description,
  attributes,
  personas,
}) => {
  const colour = backgroundColor || randomColour();
  const ConditionalLink = ({
    condition,
    link,
    anchor,
    children,
  }) => (condition ? link(children) : anchor(children));

  return (
    <li className="thumbnail">
      <ConditionalLink
        condition={base}
        link={(children) => <Link to={`/${base}/${recordId}`}>{children}</Link>}
        anchor={(children) => <a href={recordUrl}>{children}</a>}
      >
        <div className="image" style={image ? { backgroundImage: `url(${image})` } : { backgroundColor: colour }}>
          { priority && <span className="priority">PRIORITY</span> }
          { icon && <img src={icon} height="110" alt="" />}
          { illustration && <img src={illustration} width="150" alt="" />}
        </div>
        <div className="text">
          <h3>{ name }</h3>
          { description && <p>{ description }</p>}
          <Badges
            attributes={attributes || []}
            personas={personas || []}
          />
        </div>
      </ConditionalLink>
    </li>
  );
};

Card.defaultProps = {
  recordUrl: '',
  recordId: '',
  base: '',
  backgroundColor: '',
  priority: false,
  image: '',
  icon: '',
  illustration: '',
  description: '',
  attributes: [],
  personas: [],
};

Card.propTypes = {
  recordId: PropTypes.string,
  recordUrl: PropTypes.string,
  base: PropTypes.string,
  backgroundColor: PropTypes.string,
  priority: PropTypes.bool,
  image: PropTypes.string,
  icon: PropTypes.string,
  illustration: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
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
