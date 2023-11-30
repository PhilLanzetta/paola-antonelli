import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content from '../components/content'
import HeroCarousel from '../components/heroCarousel'

const ProjectTemplate = ({ data }) => {
  const { title, year, fullDates, metadata, heroImages, bodyContent } =
    data.contentfulProjectPage
  return (
    <Layout>
      <div className='page-container'>
        <HeroCarousel images={heroImages}></HeroCarousel>
        <div>{title}</div>
        {bodyContent && <Content content={bodyContent}></Content>}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getSingleCaseStudy($slug: String) {
    contentfulProjectPage(slug: { eq: $slug }) {
      bodyContent {
        ... on ContentfulMultiImageModule {
          multiImageId: id
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
          singleImageId: id
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
          bodyTextId: id
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
