import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import styles from './HighScoresPage.module.css';
import searchService from '../../utils/searchServices';
import Recipe from '../Recipe/Recipe';

const RecipeArea = (props) => (
  <div>
    {props.recipeMatch ?
      <div className="recipeArea">
        {props.recipeMatch.map((recipe, idx) =>
          <Recipe
            handleFavorite={props.handleFavorite}
            recipe={recipe}
            index={idx}
          />
          )}
      </div>
      :
      <div>
        <p> Sorry, we don't have any recipes that match your ingredients. <Link to='/newRecipe'> Please help us by adding one here. </Link> </p>
      </div>
    }
  </div>
  // <div className="recipeArea">
  //
  //   {props.recipeMatch.map((recipe) =>
  //     <Recipe
  //       recipe={recipe}
  //     />
  //   )}
  // </div>
);

export default RecipeArea;
