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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyf9SHvBLq1wbvMa`,
        tables: [
          {
            baseId: `appPIDq5zBPVNqfLa`,
            tableName: `Opportunities`,
            // tableView: `YOUR_TABLE_VIEW_NAME`, // optional
            // queryName: `OPTIONAL_NAME_TO_IDENTIFY_TABLE`, // optional
            // mapping: { `CASE_SENSITIVE_COLUMN_NAME`: `VALUE_FORMAT` }, // optional, e.g. "text/markdown", "fileNode"
            // tableLinks: [`CASE`, `SENSITIVE`, `COLUMN`, `NAMES`] // optional, for deep linking to records across tables.
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
