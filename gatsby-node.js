const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const opportunitiesTemplate = path.resolve('src/templates/opportunities.jsx');
  const conceptsTemplate = path.resolve('src/templates/concepts.jsx');
  const personasTemplate = path.resolve('src/templates/personas.jsx');
  const studiesTemplate = path.resolve('src/templates/studies.jsx');

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
      const pages = ['opportunities', 'concepts', 'personas', 'studies'];
      const table = edge.node.table.toLowerCase();
      const { recordId } = edge.node;

      if (pages.includes(table)) {
        createPage({
          path: `/${table}/${recordId}`,
          component: eval(`${table}Template`),
          context: { recordId },
        });
      }
    });
  });
};
