import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ProjectGrid from '../components/projectGrid'
import ProjectList from '../components/projectList'

const IndexPage = ({ data, location }) => {
  const allProjects = data.allContentfulProjectPage.nodes
  const [projects, setProjects] = useState(allProjects)
  const [categories, setCategories] = useState(
    location.search?.split('=')[1]?.split('-') || []
  )
  const [view, setView] = useState()
  const [userClick, setUserClick] = useState(false)
  const params = new URL('http://localhost:8000')

  useEffect(() => {
    if (localStorage.getItem('view')) {
      setView(localStorage.getItem('view'))
    } else {
      setView('grid')
    }
  }, [])

  useEffect(() => {
    if (categories.length) {
      const result = allProjects.filter((project) => {
        const projectCategories = project.category.map((cat) =>
          cat.replaceAll('&', '').replaceAll(' ', '')
        )
        return categories.some((value) => projectCategories.includes(value))
      })
      setProjects(result)
      params.searchParams.set('filters', categories.join('-'))
      window.history.pushState({}, '', params)
      setUserClick(true)
    }
    if (userClick && categories.length === 0) {
      setProjects(allProjects)
      params.searchParams.delete('filters')
      window.history.pushState({}, '', params)
    }
    if (!userClick) {
      return
    }
  }, [categories])

  const handleCategoryClick = (newCategory) => {
    if (categories.includes(newCategory)) {
      setCategories(categories.filter((category) => category !== newCategory))
    } else {
      setCategories([...categories, newCategory])
    }
  }

  const clearParams = () => {
    setCategories([])
  }

  return (
    <Layout
      location={location}
      view={view}
      setView={setView}
      handleCategoryClick={handleCategoryClick}
      categories={categories}
      clearParams={clearParams}
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
