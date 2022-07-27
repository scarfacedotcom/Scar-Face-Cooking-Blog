import { useEffect } from 'react'
import { useState } from 'react'
import RecipeList from '../../components/RecipeList'
import { projectFireStore } from '../../firebase/config'

// styles
import './Home.css'

export default function Home() {
  const [ data, setData ] = useState(null)
  const [ isPending, setIspending ] = useState(false)
  const [ error, setError ] = useState(false)

  useEffect(() => {

    setIspending(true)

    const unsub = projectFireStore.collection('recipes').onSnapshot((snapshot) => {
      if (snapshot.empty) {
        setError('no data found')
        setIspending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data()})
        })
        setData(results)
        setIspending(false)
      }
    }, (err) => {
      setIspending(false)
      setError(err.message)
    })

    return () => unsub()
  }, [])
  

  return (
    <div className="home">
      {error && <p className="error">{error}</p> }
      {isPending && <p className="loading">Loading...</p> }
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}