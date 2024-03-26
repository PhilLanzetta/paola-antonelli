/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require('path')
const slugify = require('slugify')
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetData {
      allContentfulProjectPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const projects = result.data.allContentfulProjectPage.edges

  projects.forEach(({ node }) => {
    const projectSlug = node.slug
    createPage({
      path: `/${projectSlug}`,
      component: require.resolve('./src/templates/project-template.js'),
      context: { slug: projectSlug },
    })
  })
}
