// Nested lists in one component 

// Make a list of recipes from this array! For each recipe in the array, display its name as an <h2> and list its ingredients in a <ul>.

// data.js

export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

// app

import { recipes } from './data.js';

export default function RecipeList() {
  const recipesList = recipes.map(recipe =>
  <div key={recipe.id}>
    <h2>{recipe.name}</h2>
    <ul>
    {recipe.ingredients.map(ingredient => 
    <li key={ingredient + recipe.name}>{ingredient}</li>)}
    </ul>
  </div>
  )
  return (
    <div>
      <h1>Recipes</h1>
      {recipesList}
    </div>
  );
}
