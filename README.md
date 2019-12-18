
# cxpartners - Research Library

A Gatsby implementation that dynamically pulls data from Airtable to create a simple interface for browsing insights and findings from a research project.

## Getting started

1. **Install the project**

    After cloning the repository, navigate into the root directory of the project and install the dependencies.

    ```sh
    npm install
    ```

2. **Setup Airtable**

    Create an Airtable account at https://airtable.com/signup, then copy the [template base](https://airtable.com/invite/l?inviteId=inv8gYJQmsjgvU2yG&inviteToken=a3139ac358ae9ebd7ae1a5fe6c55ff2813ea7df46459517e0b2325b595f1eadb) to your account and configure the `config` table to your brand requirements.

3. **Configure environment**

    Update the environment variables in **`.env`** with your Airtable API key, base and table URLs
  
    ```sh
    AIRTABLE_API_KEY=keyXXXXXXXXXXXXXX
    AIRTABLE_BASE=appXXXXXXXXXXXXXX
    AIRTABLE_URL=XXXXXXXXXX/XXXXXXXXXX
    ```

4. **Running Gatsby**

    Start Gatsby on your local environment by running the following command from the project's root directory.

    ```sh
    gatsby develop
    ```

    It will now be running at `http://localhost:8000`.

5. **Updating data**

    As the data is fetched during build, you will need to restart your environment to pull down the latest updates to your Airtable base.

    ```sh
    ^C
    gatsby develop
    ```

## Research guide

The layout and structure of the project are built around the application of Brad Frost's concept of [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) to UX Research. We have found that the granular level of detail works well for our research projects, however, you can customise your Airtable to fit your research style.

## Customising Airtable

### Adding new table columns

All data from any table listed in the tables array of `gatsby-source-airtable` will automatically be fetched from Airtable into Gatsby's GraphQL layer, but won't be available in a component until it's queried.

For example, to query a new column from the `Concepts` table, add the column name to the `graphql` query in **`concepts.jsx`** and then add the relevant type to `PropTypes`.

```sh
export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Concepts"}}) {
      edges {
        node {
          recordId
          data {
            Name
            Image {
              url
            }
            Illustration {
              url
            }
            Hidden
            yourNewColumnName
          }
        }
      }
    }
  }
`;
```

The data will then be available through the `data` prop in the component.

```sh
data.allAirtable.edges.node.yourNewColumnName
```

The same process can be applied to updating column names.

### Adding new tables

To pull in data from a new table, add the table name to the `gatsby-source-airtable` plugin options in **`gatsby-config.js`**

```sh
{
  resolve: 'gatsby-source-airtable',
  options: {
    apiKey: process.env.AIRTABLE_API_KEY,
    tables: [
      ...
      {
        baseId: process.env.AIRTABLE_BASE,
        tableName: 'yourTableName',
      },
```

The data from the new table will then be fetched on rebuild making it available for querying by creating a new `graphql` query.

```sh
export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "yourNewTableName"}}) {
      edges {
        node {
          recordId
          data {
            yourNewColumnName
          }
        }
      }
    }
  }
`;
```

The data will then be available through the `data` prop in your component.

```sh
yourNewTableName.edges.node.data.yourNewColumnName
```

The same process can be applied to updating table names.

### Creating new template pages

If you want to create a new template page for each row in a new table, you will first need to create a new template component in the `templates` directory. Then you will need to add your new table and template to the `templates` array in **`gatsby-node.js`**.

```sh
const templates = [
  ...
  {
    name: 'yourNewTableName',
    template: path.resolve('src/templates/yourNewTemplateName.jsx'),
  },
];
```

Each record in your table will then be created as a page and available on the route `/yourNewTableName/recordId` on rebuild.

### Querying relational data

One of the most powerful features of Airtable is the ability to link to records in other tables, therefore acting as a relational database. To query data from a linked record, just add the column name containing the linked record to the `tableLinks` array of that table in **`gatsby-browser.js`**.

```sh
{
  resolve: 'gatsby-source-airtable',
  options: {
    apiKey: process.env.AIRTABLE_API_KEY,
    tables: [
      {
        baseId: process.env.AIRTABLE_BASE,
        tableName: 'yourTableName',
        tableLinks: ['yourColumnName'],
      },
      ...
```

The data will then be available to query on rebuild.

```sh
export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "yourTableName"}}) {
      edges {
        node {
          recordId
          data {
            yourNewColumnName {
              data {
                yourLinkedRecordName
              }
            }
          }
        }
      }
    }
  }
`;
```

To find out more about working with Gatsby, read through the [docs on their website](https://www.gatsbyjs.org/docs/). For more information on fetching data from Airtable, read about the [airtable-source-plugin](https://www.gatsbyjs.org/packages/gatsby-source-airtable/) in the Gatsby plugin docs.

## Deploying

The easiest way to deploy is through Netlify. As Airtable doesn't currently support native webhooks, you will need to manually trigger a rebuild to pull down the latest data, or setup a webhook link in Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/)

Ensure that the environment variables are configured to be the same as those in your **`.env`**. In Netlify, these settings can be found in `Settings > Build & deploy > Environment`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Licence

[MIT](https://choosealicense.com/licenses/mit/)
