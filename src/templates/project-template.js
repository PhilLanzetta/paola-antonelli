import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const ProjectTemplate = ({ data }) => {
  const { title, year, fullDates, metadata, heroImages, bodyContent } =
    data.contentfulProjectPage
  return (
    <Layout>
      <div className='page-container'>{title}</div>
    </Layout>
  )
}

export const query = graphql`
  query getSingleCaseStudy($slug: String) {
    contentfulProjectPage(slug: { eq: $slug }) {
      bodyContent {
        ... on ContentfulMultiImageModule {
          id
          images {
            caption
            id
            image {
              description
              gatsbyImageData
            }
          }
          margin
          style
        }
        ... on ContentfulSingleImageModule {
          id
          image {
            caption
            id
            image {
              description
              gatsbyImageData
            }
          }
          margin
        }
        ... on ContentfulTextModule {
          id
          text {
            childMarkdownRemark {
              html
            }
          }
        }
      }
      heroImages {
        description
        gatsbyImageData
        id
      }
      title
      year
      fullDates
      metadata {
        tags {
          name
        }
      }
    }
  }
`

export default ProjectTemplate
