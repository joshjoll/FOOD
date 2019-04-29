import React from 'react';
import './Recipe.css';

const Recipe = (props) => (
      <div key={props.index} className="recipe noDec">
        <a href={props.recipe.recipeLink}target="_blank" className="noDec">
          <img src={props.recipe.recipeImg} />
          <p className="noDec"> {props.recipe.recipeName}</p>
        </a>
        <button
          onClick={ () => { props.handleFavorite(props.index) }}
          className="favoriteBtn">
          ADD TO FAVORITES
        </button>
      </div>
);

export default Recipe;
