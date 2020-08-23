import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import { Button} from '@material-ui/core'
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';


const App = () =>{


  const APP_ID = "301d5082";
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const [recipes, setRecipes] = useState([]);
  const[search, setSearch] = useState('');

  const [query, setQuery] = useState('avocado');

  useEffect(() => {
    getRecipes();

  }, [query]);

const getRecipes = async () => {
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);

}

const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);

}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}
  return(
    <div ClassName = "App">

      <form onSubmit ={getSearch}className = "search-form">
        <input className = "search-bar" type = "text" value ={search} placeHolder = "Search One or More Ingredients Here" onChange={updateSearch}/>
    <Button className = "search-button" type = "submit" variant = "outlined" color = "primary">
      Search
     </Button>
     </form>
     <div className="recipes">
     {recipes.map(recipe =>(
       <Recipe
       key = {recipe.recipe.label}
       title ={recipe.recipe.label}
       calories={recipe.recipe.calories}
        image = {recipe.recipe.image}
        ingredients = {recipe.recipe.ingredients}
       />
     ))}
     </div>
     </div>
  );

}


export default App;
