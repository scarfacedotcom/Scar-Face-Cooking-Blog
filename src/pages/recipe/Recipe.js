import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { projectFireStore } from '../../firebase/config'
import { useEffect, useState } from 'react'

// styles
import './Recipe.css'


export default function Recipe() {
  const { id } = useParams()
  const { mode } = useTheme()

  const [ data, setData ] = useState(null)
  const [ isPending, setIspending ] = useState(false)
  const [ error, setError ] = useState(false)

  useEffect(() => {

    setIspending(true)

    projectFireStore.collection('recipes').doc(id).get().then((doc) => {
      console.log(doc)
    })


  }, [])
  

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  )
}