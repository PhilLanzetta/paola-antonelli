import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { RiLayoutGridFill } from 'react-icons/ri'
import { PiListBold } from 'react-icons/pi'
import slugify from 'slugify'

const Header = ({ location, view, setView }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjectPage {
        nodes {
          category
        }
      }
    }
  `)
  const categories = data.allContentfulProjectPage.nodes
    .map((node) => node.category)
    .flat()
    .filter(function onlyUnique(value, index, array) {
      return array.indexOf(value) === index
    })
    .sort()

  return (
    <header>
      <Link to='/' className='header-link' activeClassName='active-header-link'>
        <strong>Paola Antonelli</strong>
      </Link>
      {categories.map((category, index) => (
        <Link
          key={index}
          className='header-link'
          activeClassName='active-header-link'
          to={`/${slugify(category, { lower: true })}`}
        >
          {category}
        </Link>
      ))}
      <Link
        to='/about'
        className='header-link'
        activeClassName='active-header-link'
      >
        About
      </Link>
      <Link
        to='/contact'
        className='header-link'
        activeClassName='active-header-link'
      >
        Contact
      </Link>
      {view && (
        <button
          className={`header-link ${
            view === 'grid' ? 'active-header-link' : ''
          }`}
          onClick={() => {
            localStorage.setItem('view', 'grid')
            setView('grid')
          }}
        >
          <RiLayoutGridFill></RiLayoutGridFill>
        </button>
      )}
      {view && (
        <button
          className={`header-link ${
            view === 'list' ? 'active-header-link' : ''
          }`}
          onClick={() => {
            localStorage.setItem('view', 'list')
            setView('list')
          }}
        >
          <PiListBold></PiListBold>
        </button>
      )}
    </header>
  )
}

export default Header
