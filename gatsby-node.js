/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = ({ actions, graphql }) => {

    const { createPage } = actions;
    const blogPostTemplate = path.resolve(`src/pages/projectTemplate.js`);

    return graphql(`{
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              path
              title
            }
          }
        }
      }
    }`)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }
      result.data.allMarkdownRemark.edges
        .forEach(({ node }) => {
            createPage({
              path: node.frontmatter.path,
              component: blogPostTemplate,
              context: {} // additional data can be passed via context
            });
          });
        });
}      
  