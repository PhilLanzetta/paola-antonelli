import * as React from 'react'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
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
