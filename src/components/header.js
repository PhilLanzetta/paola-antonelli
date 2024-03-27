import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { RiLayoutGridFill } from 'react-icons/ri'
import { PiListBold } from 'react-icons/pi'

const Header = ({
  location,
  view,
  setView,
  handleCategoryClick,
  categories,
  clearParams,
  projectCategory,
}) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjectPage {
        nodes {
          category
        }
      }
    }
  `)
  const categoryHeadings = data.allContentfulProjectPage.nodes
    .map((node) => node.category)
    .flat()
    .filter(function onlyUnique(value, index, array) {
      return array.indexOf(value) === index
    })
    .sort()

  const [open, setOpen] = useState(false)

  return (
    <header>
      <Link
        to='/'
        className='header-link'
        onClick={location?.pathname === '/' ? () => clearParams() : null}
      >
        <strong>Paola Antonelli</strong>
      </Link>
      {location?.pathname === '/' &&
        categoryHeadings.map((category, index) => {
          const cleanCat = category.replaceAll('&', '').replaceAll(' ', '')
          return (
            <button
              key={index}
              className={
                categories.length > 0
                  ? categories.includes(cleanCat)
                    ? 'header-link active-header-link'
                    : 'this ran'
                  : location.search
                      ?.split('=')[1]
                      ?.split('-')
                      .includes(cleanCat)
                  ? 'header-link active-header-link'
                  : 'no this ran'
              }
              onClick={() => handleCategoryClick(cleanCat)}
            >
              {category}
            </button>
          )
        })}
      {projectCategory &&
        projectCategory.map((cat, index) => {
          const cleanCat = cat.replaceAll('&', '').replaceAll(' ', '')
          return (
            <Link
              key={index}
              className='header-link active-header-link'
              to={`/?filters=${cleanCat}`}
            >
              {cat}
            </Link>
          )
        })}
      {!location && (
        <button
          onClick={() => setOpen(!open)}
          className={
            open
              ? 'header-link elipsis active-header-link'
              : 'header-link elipsis'
          }
        >
          &#9724; &#9724; &#9724;
        </button>
      )}
      {!location &&
        open &&
        !projectCategory &&
        categoryHeadings.map((category, index) => {
          const cleanCat = category.replaceAll('&', '').replaceAll(' ', '')
          return (
            <Link
              key={index}
              className='header-link'
              to={`/?filters=${cleanCat}`}
            >
              {category}
            </Link>
          )
        })}
      {!location &&
        open &&
        projectCategory &&
        categoryHeadings
          .filter((a) => !projectCategory.includes(a))
          .map((category, index) => {
            const cleanCat = category.replaceAll('&', '').replaceAll(' ', '')
            return (
              <Link
                key={index}
                className='header-link'
                to={`/?filters=${cleanCat}`}
              >
                {category}
              </Link>
            )
          })}
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
