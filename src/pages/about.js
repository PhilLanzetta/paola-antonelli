import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { GatsbyImage } from 'gatsby-plugin-image'

const AboutPage = ({ data }) => {
  const { headshot, awards, degrees, biography } = data.contentfulAboutPage
  return (
    <Layout>
      <div className='page-container'>
        <div className='about-headshot-container'>
          <GatsbyImage
            image={headshot.gatsbyImageData}
            alt={headshot.description}
            imgStyle={{ objectFit: 'contain' }}
            className='about-headshot'
          ></GatsbyImage>
        </div>
        <h1 className='about-name'>Paola Antonelli</h1>
        <div
          className='about-biography'
          dangerouslySetInnerHTML={{
            __html: biography.childMarkdownRemark.html,
          }}
        ></div>
        <div>
          <p className='about-list-title'>Awards</p>
          <div className='about-list-container'>
            {awards.map((award) => (
              <div key={award.id} className='about-list-item'>
                <p>{award.title}</p>
                <p>{award.organization}</p>
                <p>{award.year}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className='about-list-title'>Post-Doctorates</p>
          <div className='about-list-container'>
            {degrees.map((degree) => (
              <div key={degree.id} className='about-list-item'>
                <p>{degree.institution}</p>
                <p>{degree.degreeTitle}</p>
                <p>{degree.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulAboutPage {
      awards {
        title
        organization
        id
        year
      }
      biography {
        childMarkdownRemark {
          html
        }
      }
      degrees {
        degreeTitle
        institution
        id
        year
      }
      headshot {
        description
        gatsbyImageData
      }
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title='About' />

export default AboutPage
