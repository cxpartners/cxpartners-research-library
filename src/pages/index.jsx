import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import opportunitiesIcon from '../images/icon_bird.svg';
import conceptsIcon from '../images/icon_desk-lamp.svg';
import personasIcon from '../images/icon_paper-plane.svg';
import studiesIcon from '../images/icon_woman.svg';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Thumbnail from '../components/thumbnail';

const IndexPage = ({ data }) => {
  const company = data.airtable.data.Company;

  const thumbnails = [
    {
      link: '/opportunities/',
      backgroundColour: '#E6F8FC',
      icon: opportunitiesIcon,
      header: 'Opportunities',
      description: 'Identified opportunities for delivering customer and business value',
    },
    {
      link: '/concepts/',
      backgroundColour: '#FCF0EE',
      icon: conceptsIcon,
      header: 'Concepts',
      description: 'Potential solutions or interventions in response to the identified opportunities',
    },
    {
      link: '/personas/',
      backgroundColour: '#EEF0F7',
      icon: personasIcon,
      header: 'Personas',
      description: 'Representative customer types based on needs, goals and observed behaviors',
    },
    {
      link: '/studies/',
      backgroundColour: '#F0F9ED',
      icon: studiesIcon,
      header: 'Studies',
      description: 'Overview of research and design studies carried out that informed this library',
    },
  ];

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <header>
          <h1>
            {`${company} Research Library`}
          </h1>
          <p>
            {`This library is a central resource containing ${company.slice(-1) === 's' ? `${company}'` : `${company}'s`} customer insights and hypotheses, as well as details of the research activities that informed them.`}
          </p>
        </header>
        <hr />
        <nav>
          <ul>
            { thumbnails.map((t) => (
              <li>
                <Thumbnail
                  link={t.link}
                  backgroundColor={t.backgroundColour}
                  icon={t.icon}
                  header={t.header}
                  description={t.description}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    airtable(table: {eq: "Config"}) {
      data {
        Company
      }
    }
  }
`;

IndexPage.defaultProps = {
  data: {},
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    airtable: PropTypes.shape({
      data: PropTypes.shape({
        Company: PropTypes.string,
      }),
    }),
  }),
};

export default IndexPage;
