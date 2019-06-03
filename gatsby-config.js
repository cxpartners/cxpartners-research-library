require('dotenv').config({
  path: '.env',
})

const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: `cxpartners Research Library`,
    description: `The alpha version  `,
    author: `cxpartners`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 2 versions', 'not ie 10'],
            grid: true,
          })
        ],
        precision: 8
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Research Library`,
        short_name: `Research Library`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `appPIDq5zBPVNqfLa`,
            tableName: `Opportunities`,
            tableLinks: [`Personas`, `Example_Concepts`, `Key_Insights`, `Supporting_Insights`]
          },
          {
            baseId: `appPIDq5zBPVNqfLa`,
            tableName: `Insights`,
          },
          {
            baseId: `appPIDq5zBPVNqfLa`,
            tableName: `Stories`,
          },
          {
            baseId: `appPIDq5zBPVNqfLa`,
            tableName: `Concepts`,
          },
          {
            baseId: `appPIDq5zBPVNqfLa`,
            tableName: `Personas`,
          },
          {
            baseId: `appPIDq5zBPVNqfLa`,
            tableName: `Activities`,
          },
          {
            baseId: `appPIDq5zBPVNqfLa`,
            tableName: `Studies`,
          },
          {
            baseId: `appPIDq5zBPVNqfLa`,
            tableName: `Modes`,
          },
          {
            baseId: `appPIDq5zBPVNqfLa`,
            tableName: `Config`,
          }
        ]
      }
    }
    // `gatsby-plugin-offline`,
  ],
}
