import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { isEmpty } from '../utils';

const Card = ({
  cards,
  base,
}) => {
  const filteredCards = cards.filter((v) => !isEmpty(v.node) && !v.node.data.Hidden);

  return (
    <>
      { filteredCards.map((v) => {
        const { data } = v.node;
        return (
          <div key={data.recordId} className="col-xs-12 col-sm-6 col-lg-3">
            <Link to={`/${base}/${data.recordId}`} className="thumbnail">
              <div className="image" data-toggle="tooltip" style={{ backgroundColor: data.Colour }}>
                { data.Priority && <span className="priority">PRIORITY</span>}
                { data.Image && !data.Illustration && data.Image[0].url.endsWith('.svg') && <img src={data.Image[0].url} height="110" alt="" />}
                { data.Image && !data.Illustration && !data.Image[0].url.endsWith('.svg') && <img src={data.Image[0].url} width="100%" alt="" />}
                { data.Illustration && <img src={data.Illustration[0].url} width="150" alt="" />}
              </div>
              <div className="text">
                <h3 data-toggle="tooltip" title="Opportunities">{ data.Name }</h3>
                <p className="badges" data-toggle="tooltip" title="Opportunities">
                  { data.Attributes && data.Attributes.map((attribute, index) => (
                    <span className="badge badge-pill badge-primary" key={index}>{ attribute }</span>
                  ))}
                  { data.Personas && data.Personas.map((persona, index) => (
                    <span className="badge badge-pill badge-secondary" key={index}>{persona.data.Name}</span>
                  ))}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

Card.defaultProps = {
  cards: [],
  base: '',
};

Card.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      recordId: PropTypes.string,
    }),
  ),
  base: PropTypes.string,
};

export default Card;
