import * as React from 'react'
import { Link } from 'gatsby'

const Header = () => (
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
  </header>
)

export default Header
