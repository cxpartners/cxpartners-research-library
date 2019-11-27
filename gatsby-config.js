require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: 'cxpartners Research Library',
    description: 'This example library is a demonstration of a central resource containing customer insights and hypotheses, as well as details of the research activities that informed them.',
    author: 'cxpartners',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-eslint',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Research Library',
        short_name: 'Research Library',
        start_url: '/',
        background_color: '#0e8add',
        theme_color: '#0e8add',
        display: 'minimal-ui',
        icon: 'src/images/cxpartners-logo.png',
      },
    },
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE,
            tableName: 'Opportunities',
            tableLinks: ['Personas', 'Example_Concepts', 'Key_Insights', 'Supporting_Insights'],
          },
          {
            baseId: process.env.AIRTABLE_BASE,
            tableName: 'Insights',
          },
          {
            baseId: process.env.AIRTABLE_BASE,
            tableName: 'Stories',
          },
          {
            baseId: process.env.AIRTABLE_BASE,
            tableName: 'Concepts',
          },
          {
            baseId: process.env.AIRTABLE_BASE,
            tableName: 'Personas',
          },
          {
            baseId: process.env.AIRTABLE_BASE,
            tableName: 'Activities',
          },
          {
            baseId: process.env.AIRTABLE_BASE,
            tableName: 'Studies',
          },
          {
            baseId: process.env.AIRTABLE_BASE,
            tableName: 'Modes',
          },
          {
            baseId: process.env.AIRTABLE_BASE,
            tableName: 'Config',
          },
        ],
      },
    },
  ],
};
