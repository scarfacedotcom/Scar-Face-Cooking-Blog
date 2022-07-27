import { NavLink } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import Trashcan from '../assets/trashcan.svg'
import { projectFireStore } from '../firebase/config'

//styles
import './RecipeList.css'


export default function RecipeList({ recipes }) {

  const { mode } = useTheme()

  const handleDelete = (id) => {
    projectFireStore.collection('recipes').doc(id).delete()
  }

  if (recipes.length === 0) {
      return <div className='error'>No Recipes to Load...</div>
  }
  return (
    <div className='recipe-list' >
      {recipes.map(recipe => (
        <div key={recipe.id} className={`card ${mode}`} >
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.method.substring(0,100)}...</div>
          <NavLink to={`/recipes/${recipe.id}`}>Cook this</NavLink>
          <img
          className='delete'
          src={Trashcan}
          onClick={() => handleDelete(recipe.id)}
          />
        </div>
      ))}
    </div>
  )
}
