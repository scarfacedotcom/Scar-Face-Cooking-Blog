import { NavLink } from 'react-router-dom'
import './Navbar.css'

import React from 'react'
import Searchbar from './Searchbar'

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <NavLink to="/" className="brand">Cook with Scar Face</NavLink>
        <Searchbar />
        <NavLink to="/create">Create Recipe</NavLink>
      </nav>
    </div>
  )
}
