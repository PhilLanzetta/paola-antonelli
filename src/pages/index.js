import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
  const projects = data.allContentfulProjectPage.nodes
  return (
    <Layout>
      <div className='home-container'>
        {projects.map((project) => {
          const { title, category, featuredImage, metadata } = project
          const imgWidth =
            (featuredImage.gatsbyImageData.width * 20) /
            featuredImage.gatsbyImageData.height
          return (
            <div className='project-card'>
              <div className='project-card-img-container'>
                <GatsbyImage
                  className='project-card-img'
                  style={{ width: `${imgWidth}vw` }}
                  image={featuredImage.gatsbyImageData}
                  alt={featuredImage.description}
                ></GatsbyImage>
              </div>
              <div>
                <div>
                  <p>{title}</p>
                  <p>{metadata.tags[0]?.name}</p>
                </div>
                <button>{category}</button>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulProjectPage {
      nodes {
        category
        featuredImage {
          description
          gatsbyImageData
        }
        title
        metadata {
          tags {
            contentful_id
            name
          }
        }
      }
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title='Home' />

export default IndexPage
