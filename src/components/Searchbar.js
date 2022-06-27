import { useState } from 'react'
import './Searchbar.css'

export default function Searchbar() {
  const [term, setTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault
  }

  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input 
          type="text"
          id='search'
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
      
    </div>
  )
}
