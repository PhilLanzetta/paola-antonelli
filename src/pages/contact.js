import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ContactPage = () => (
  <Layout>
    <div>
      <h1 className='contact-title'>Paola Antonelli</h1>
      <div className='contact-info-container'>
        <div>
          <a href='mailto:paola@paolaantonelli.com'>paola@paolaantonelli.com</a>
          <p>Email</p>
        </div>
        <div>
          <a
            href='https://twitter.com/curiousoctopus'
            target='_blank'
            rel='noreferrer'
          >
            @curiousoctopus
          </a>
          <p>Twitter</p>
        </div>
        <div>
          <a
            href='https://instagram.com/paolaantonelli'
            target='_blank'
            rel='noreferrer'
          >
            @paolaantonelli
          </a>
          <p>Instagram</p>
        </div>
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title='Contact' />

export default ContactPage
