import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content from '../components/content'
import HeroCarousel from '../components/heroCarousel'

const ProjectTemplate = ({ data }) => {
  const {
    title,
    year,
    fullDates,
    metadata,
    heroImages,
    bodyContent,
    introductionText,
  } = data.contentfulProjectPage
  return (
    <Layout>
      <div className='page-container'>
        <HeroCarousel images={heroImages}></HeroCarousel>
        <div className='project-heading-row'>
          <div className='project-heading-tag'>
            {metadata?.tags?.length > 0 ? metadata.tags[0].name : ''}
          </div>
          <div className='project-heading-title'>{title}</div>
          <div className='project-heading-date'>
            {fullDates ? fullDates : year}
          </div>
        </div>
        {introductionText && (
          <div
            className='project-intro-text'
            dangerouslySetInnerHTML={{
              __html: introductionText.childMarkdownRemark.html,
            }}
          ></div>
        )}
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
      introductionText {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default ProjectTemplate
