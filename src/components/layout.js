import * as React from 'react'
import Header from './header'
import useWindowSize from '../utils/useWindowSize'

const Layout = ({
  children,
  location,
  view,
  setView,
  categories,
  handleCategoryClick, 
  clearParams,
}) => {
  const { width } = useWindowSize()
  const desktop = width > 601
  return (
    <>
      <Header
        location={location}
        view={view}
        setView={setView}
        categories={categories}
        handleCategoryClick={handleCategoryClick}
        clearParams={clearParams}
      />
      {desktop && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 141.908 141.908'
          className='octopus-icon'
        >
          <g id='noun-octopus-2691001' transform='translate(-5.368 -0.5)'>
            <rect
              id='Rectangle_459'
              data-name='Rectangle 459'
              width='141.908'
              height='141.908'
              transform='translate(5.368 0.5)'
              fill='none'
            />
            <path
              id='Path_78'
              data-name='Path 78'
              d='M85.323,16.447H95.966v5.322h5.322V37.733H95.966V48.376H90.645V53.7h10.643V48.376h5.322V37.733h5.322V32.411H127.9v5.322h5.322V48.376H127.9V53.7h-5.322V43.054h-5.322V53.7h-5.322v5.322h-5.322V64.34H90.645v5.322h10.643v5.322h10.643v5.322h5.322V96.27h-5.322v5.322h-5.322v5.322h5.322v5.322H101.288V96.27h5.322V85.627h-5.322V80.305H85.323V74.984H80V85.627H74.68v5.322H69.359v10.643H74.68v5.322H80v15.965H69.359v-5.322H74.68v-5.322H64.037v-5.322H58.715V85.627h5.322V80.305H58.715v5.322H48.072v5.322H42.751v10.643h5.322v5.322H37.429v-5.322H32.108V85.627h5.322V80.305h5.322V74.984H53.394V69.662H37.429V64.34H32.108V53.7H21.465v5.322h5.322V64.34H10.822V59.019H5.5V48.376h5.322V43.054H37.429v5.322h5.322V59.019H53.394V48.376H48.072V27.09h5.322V21.768h5.322V16.447h5.322V11.125H85.323ZM69.359,69.662H64.037V80.305h5.322ZM64.037,32.411H53.394V43.054H64.037Zm5.322,0V43.054H80V32.411Zm-9.252,9.241H54.785V36.331h5.322Zm15.965,0H70.749V36.331h5.322Z'
              transform='translate(6.964 4.453)'
              fill='#0089aa'
              fill-rule='evenodd'
            />
          </g>
        </svg>
      )}
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} &middot; Website Designed and Developed by
        {` `}
        <a href='https://www.pacificpacific.pub'>Pacific</a>
      </footer>
    </>
  )
}

export default Layout
