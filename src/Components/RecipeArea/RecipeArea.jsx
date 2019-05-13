import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import styles from './HighScoresPage.module.css';
import Recipe from '../Recipe/Recipe';

const RecipeArea = (props) => (
  <div>
    {(props.recipeMatch.length > 0) ?
      <div className="recipeArea">
        {props.recipeMatch.map((recipe, idx) =>
          <Recipe
            key={idx}
            handleFavorite={props.handleFavorite}
            recipe={recipe}
            index={idx}
            getUser={props.getUser}
            recipeMatch={props.recipeMatch}
            user={props.user}
          />
          )}
      </div>
      :
      <div>
        <p> Sorry, we don't have any recipes that match your ingredients. <Link to='/newRecipe'> Please help us by adding one here. </Link> </p>
      </div>
    }
  </div>
);

export default RecipeArea;
