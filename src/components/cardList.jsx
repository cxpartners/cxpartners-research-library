import React from 'react';
import PropTypes from 'prop-types';

import isEmpty from '../utils/isEmpty';

import Card from './card';

const cardList = ({
  base,
  data,
}) => {
  const list = data && data.filter((v) => !isEmpty(v.node) && !v.node.data.Hidden);
  console.log(data);
  return (
    <ul className="thumbnail-list">
      { list.map((l) => {
        const d = l.node.data;
        return (
          <Card
            base={base}
            recordId={l.node.recordId}
            backgroundColor={d.Colour}
            priority={d.Priority}
            image={d.Image && d.Image[0].url}
            illustration={d.Illustration && d.Illustration[0].url}
            name={d.Name}
            attributes={d.Attributes}
            personas={d.Personas}
          />
        );
      })}
    </ul>
  );
};


cardList.defaultProps = {
  base: '',
  data: {},
};

cardList.propTypes = {
  base: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        data: PropTypes.shape({
          Name: PropTypes.string,
        }),
        recordId: PropTypes.string,
      }),
    }),
  ),
};

export default cardList;
