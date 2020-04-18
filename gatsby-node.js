/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const post = path.resolve("./src/templates/post.tsx")
    graphql(
      `
        {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  slug
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      result.data.allMarkdownRemark.edges.map(edge => {
        createPage({
          path: edge.node.frontmatter.slug,
          component: post,
          context: {
            slug: edge.node.frontmatter.slug,
          },
        })
      })
      resolve("OK")
    })
  })
}
