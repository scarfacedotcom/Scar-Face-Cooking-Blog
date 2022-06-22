import './RecipeList.css'


export default function RecipeList({ recipes }) {
  return (
    <div className='recipe-list' >
      {recipes.map(recipe => (
        <div key={recipe.id} className="card" >
          <h3></h3>
        </div>
      ))}
    </div>
  )
}
