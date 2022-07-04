import { useLocation } from 'react-router-dom'

// styles
import './Search.css'

export default function Search() {
  const queryString = useLocation()
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('a')

  return (
    <div>
      Search
    </div>
  )
}