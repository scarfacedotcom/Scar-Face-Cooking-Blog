import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { projectFireStore } from '../../firebase/config'
import { useEffect, useState } from 'react'

// styles
import './Recipe.css'


export default function Recipe() {
  const { id } = useParams()
  const { mode } = useTheme()

  const [ recipe, setRecipe ] = useState(null)
  const [ isPending, setIspending ] = useState(false)
  const [ error, setError ] = useState(false)

  useEffect(() => {

    setIspending(true)

    projectFireStore.collection('recipes').doc(id).get().then((doc) => {
      if(doc.exists) {
        setIspending(false)
        setRecipe(doc.data())
      } else {
        setIspending(false)
        setError('could not fetch Data')
      }
    })


  }, [])

  const handleClick = () => {
    projectFireStore.collection('recipe').doc(id).update({
      title: 'something different'
    })
  }
  

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
          <button onClick={() => handClick}>Update Me</button>
        </>
      )}
    </div>
  )
}