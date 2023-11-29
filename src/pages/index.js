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
          const { title, category, featuredImage, metadata, slug } = project
          const imgWidth =
            (featuredImage.gatsbyImageData.width * 20) /
            featuredImage.gatsbyImageData.height
          return (
            <Link className='project-card' to={`/${slug}`}>
              <div className='project-card-img-container'>
                <GatsbyImage
                  className='project-card-img'
                  style={{ width: `${imgWidth}vw` }}
                  image={featuredImage.gatsbyImageData}
                  alt={featuredImage.description}
                ></GatsbyImage>
              </div>
              <div className='project-card-text'>
                <div>
                  <p className='project-card-title'>{title}</p>
                  <p>{metadata.tags[0]?.name}</p>
                </div>
                <button className='project-card-category'>{category}</button>
              </div>
            </Link>
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
        slug
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
