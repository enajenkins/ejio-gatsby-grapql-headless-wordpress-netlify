const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path"); // to resolve the path to the component

// in order to interact with the node API you have to export and use onCreateNode
// refer to https://www.gatsbyjs.org/docs/node-apis/
// onCreateNode - Called when a new node is created. Plugins wishing to extend or transform nodes created by other plugins should implement this API.
// destructure the node here...
// arg actions will destructure the createNodeField function and enable you to import a field in MarkdownRemark so we can add it to the graphql query object
exports.onCreateNode = ({node, getNode, actions}) => {
  // print the node name while building
  // then you can create a slug (/first-post/, /second-post/) whenever you create a post so you can add them to your markdown Graphql
  console.log(node.internal.type);

  // create slug
  // check to see if node type is "MarkdownRemark". if so, create a file path
  // base path is where the .md files are located
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({node, getNode, basePath: "posts"})
    // createNodeField so we can add it to the query
    createNodeField({node, name: "slug", value: slug})
  }
}

// you don't need to import graphql at the top. you'll get an error
// create the pages for your articles. createPages will recieve an object from graphql
/* createPages
  Tell plugins to add pages. This extension point is called only after the initial sourcing and transformation of nodes plus creation of the GraphQL schema are complete so you can query your data in order to create pages.
*/
// 
exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  // run the query and get the results
  // then convert the object to a json string
  return graphql(`
    {
      allWordpressPost {
        nodes {
          slug
        }
      }
    }
    `).then(result => {
      // use the create page action here
      // iterate through each slug and create a page
      // select the path to use for the page and the component (in this case, layout) to use
      // find the article that corresponds to the slug by providing a context to the page
      result.data.allWordpressPost.nodes.forEach((node) => {
        createPage({
         // path: node.fields.slug, 
          path: node.slug, 
          component: path.resolve('./src/layouts/BlogpostLayouts.js'),
          context: {
            //slug: node.fields.slug
            slug: node.slug
          }
        })
      })
    })
}

/****************/
/* example query
  query {
    allMarkdownRemark {
      nodes {
        fields {
          slug
        }
      }
    }
  }
 */