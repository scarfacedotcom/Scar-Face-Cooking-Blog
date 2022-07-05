import './Navbar.css'

import React, { useContext } from 'react'
import Searchbar from './Searchbar'
import { ThemeContext } from '../context/ThemeContext'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
  const { color } = useContext(ThemeContext)

  return (
    <div className='navbar'style={{ background: color }}>
      <nav>
        <NavLink to="/" className="brand">Cook with Scar Face</NavLink>
        <Searchbar />
        <NavLink to="/create">Create Recipe</NavLink>
      </nav>
    </div>
  )
}
