const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const templates = [
    { name: 'opportunities', template: path.resolve('src/templates/opportunities.jsx') },
    { name: 'concepts', template: path.resolve('src/templates/concepts.jsx') },
    { name: 'personas', template: path.resolve('src/templates/personas.jsx') },
    { name: 'studies', template: path.resolve('src/templates/studies.jsx') },
  ];

  const pages = templates.map((t) => t.name);

  return graphql(`
    query loadPagesQuery {
      allAirtable {
        edges {
          node {
            recordId
            table
          }
        }
      }
    }
  `, { limit: 10000 }).then((result) => {
    if (result.data.errors) {
      throw result.errors;
    }

    result.data.allAirtable.edges.forEach((edge) => {
      const table = edge.node.table.toLowerCase();
      const { recordId } = edge.node;

      if (pages.includes(table)) {
        createPage({
          path: `/${table}/${recordId}`,
          component: templates.find((t) => t.name === table).template,
          context: { recordId },
        });
      }
    });
  });
};
