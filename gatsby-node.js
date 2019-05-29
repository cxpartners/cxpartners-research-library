const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  
  const opportunitiesTemplate = path.resolve(`src/templates/opportunities.js`)
  const conceptsTemplate = path.resolve(`src/templates/concepts.js`)
  const personasTemplate = path.resolve(`src/templates/personas.js`)
  const studiesTemplate = path.resolve(`src/templates/studies.js`)

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
  `, { limit: 10000 }).then(result => {
    if (result.data.errors) {
      throw result.errors
    }

    result.data.allAirtable.edges.forEach(edge => {
    	// const pages = ['opportunties', 'concepts', 'personas', 'studies']
    	const table = edge.node.table.toLowerCase()

    	if(table === 'opportunities' || table === 'concepts' || table === 'personas' || table === 'studies' ){
    		createPage({
    		  path: `/${table}/${edge.node.recordId}`,
    		  component: eval(`${table}Template`),
    		  context: {
    		  
    		  },
    		})
    	}
    })
  })
}
