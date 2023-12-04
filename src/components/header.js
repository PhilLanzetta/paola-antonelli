import * as React from 'react'
import { Link } from 'gatsby'
import { RiLayoutGridFill } from 'react-icons/ri'
import { PiListBold } from 'react-icons/pi'

const Header = ({ location, view, setView, category, setCategory }) => (
  <header>
    <Link to='/' className='header-link'>
      <strong>Paola Antonelli</strong>
    </Link>
    <button className='header-link'>Interviews</button>
    <button className='header-link'>R&D Salon</button>
    <button className='header-link'>Exhibitions</button>
    <button className='header-link'>Speaking</button>
    <button className='header-link'>Publications</button>
    <button className='header-link'>Collaborations</button>
    <button className='header-link'>Essays & Articles</button>
    <button className='header-link'>Programs</button>
    <Link to='/about' className='header-link'>
      About
    </Link>
    <Link to='/contact' className='header-link'>
      Contact
    </Link>
    <button
      className={`header-link ${view === 'grid' ? 'active-header-link' : ''}`}
      onClick={() => {
        localStorage.setItem('view', 'grid')
        setView('grid')
      }}
    >
      <RiLayoutGridFill></RiLayoutGridFill>
    </button>
    <button
      className={`header-link ${view === 'list' ? 'active-header-link' : ''}`}
      onClick={() => {
        localStorage.setItem('view', 'list')
        setView('list')
      }}
    >
      <PiListBold></PiListBold>
    </button>
  </header>
)

export default Header
