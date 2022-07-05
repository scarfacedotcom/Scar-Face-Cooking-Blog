import './Navbar.css'

import React from 'react'
import Searchbar from './Searchbar'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme';


export default function Navbar() {

  const { color, changeColor } = useTheme()

  return (
    <div className='navbar'style={{ background: color }}>
      <nav onClick={() => changeColor('red')} >
        <NavLink to="/" className="brand">Cook with Scar Face</NavLink>
        <Searchbar />
        <NavLink to="/create">Create Recipe</NavLink>
      </nav>
    </div>
  )
}
