import React from 'react';
import Recipes from '../Recipe/Recipe';

const RecipeArea = (props) => (
  <div className="recipeArea">

    {props.recipeMatch.map((recipe) =>
      <Recipes
        recipe={recipe}
      />
    )}
  </div>
);

export default RecipeArea;
