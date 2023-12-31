import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ProjectGrid from '../components/projectGrid'
import ProjectList from '../components/projectList'

const IndexPage = ({ data, location }) => {
  const allProjects = data.allContentfulProjectPage.nodes
  const [projects, setProjects] = useState(allProjects)
  const [category, setCategory] = useState(location.state?.category || [])
  const [view, setView] = useState()

  useEffect(() => {
    if (localStorage.getItem('view')) {
      setView(localStorage.getItem('view'))
    } else {
      setView('grid')
    }
  }, [])

  return (
    <Layout
      location={location}
      setProjects={setProjects}
      category={category}
      setCategory={setCategory}
      view={view}
      setView={setView}
    >
      {view === 'grid' && <ProjectGrid projects={projects}></ProjectGrid>}
      {view === 'list' && <ProjectList projects={projects}></ProjectList>}
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulProjectPage {
      nodes {
        category
        id
        featuredImage {
          description
          gatsbyImageData
        }
        title
        slug
        year
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
