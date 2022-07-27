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
  const [ error, setError ] = useState(null)

  useEffect(() => {

    setIspending(true)

    const unsub = projectFireStore.collection('recipes').doc(id).onSnapshot((doc) => {
      if(doc.exists) {
        setIspending(false)
        setRecipe(doc.data())
      } else {
        setIspending(false)
        setError('could not fetch Data')
      }
    })

    return () => unsub()


  }, [id])

  const handleClick = () => {
    projectFireStore.collection('recipes').doc(id).update({
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
          <button onClick={handleClick}>Update Me</button>
        </>
      )}
    </div>
  )
}

// import { useParams } from 'react-router-dom'
// import { useTheme } from '../../hooks/useTheme'
// import { useState, useEffect } from 'react'
// import { projectFireStore } from '../../firebase/config'

// // styles
// import './Recipe.css'

// export default function Recipe() {
//   const { id } = useParams()
//   const { mode } = useTheme()

//   const [isPending, setIsPending] = useState(false)
//   const [error, setError] = useState(null)
//   const [recipe, setRecipe] = useState(null)

//   useEffect(() => {
//     setIsPending(true)

//     const unsub = projectFireStore.collection('recipes').doc(id).onSnapshot(doc => {
//       if (doc.exists) {
//         setIsPending(false)
//         setRecipe(doc.data())
//       } else {
//         setIsPending(false)
//         setError(`Could not find that recipe`)
//       }
//     })

//     return () => unsub()

//   }, [id])

//   const handleClick = () => {
//     projectFireStore.collection('recipes').doc(id).update({
//       title: 'Something completely different'
//     })
//   }

//   return (
//     <div className={`recipe ${mode}`}>
//       {error && <p className="error">{error}</p>}
//       {isPending && <p className="loading">Loading...</p>}
//       {recipe && (
//         <>
//           <h2 className="page-title">{recipe.title}</h2>
//           <p>Takes {recipe.cookingTime} to cook.</p>
//           <ul>
//             {recipe.ingredients.map(ing => <li key={ing}>ing</li>)}
//           </ul>
//           <p className="method">{recipe.method}</p>
//           <button onClick={handleClick}>Update me</button>
//         </>
//       )}
//     </div>
//   )
// }