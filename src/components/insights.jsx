import React from 'react';
import PropTypes from 'prop-types';

const Insights = ({
  title,
  insights,
}) => (
  <>
    { title && <h4>{title}</h4> }
    <ul className="insights-list">
      { insights && insights.map((insight) => (
        <li>
          <a
            key={insight.recordId}
            className="badges"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://airtable.com/tblosssvF4nn2TChF/viwIDA3HojnvLxvVf/${insight.recordId}?blocks=hide`}
          >
            <p><span>{ insight.data.Insight }</span></p>
          </a>
        </li>
      ))}
    </ul>
  </>
);

Insights.defaultProps = {
  title: '',
  insights: [],
};

Insights.propTypes = {
  title: PropTypes.string,
  insights: PropTypes.arrayOf(
    PropTypes.shape({
      recordId: PropTypes.string,
    }),
  ),
};

export default Insights;
