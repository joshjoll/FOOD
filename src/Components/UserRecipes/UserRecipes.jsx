import React from 'react';
import Recipe from '../Recipe/Recipe';

// import { Link } from 'react-router-dom';


const UserRecipes = (props) => {
  return (
    <div className="userFavorites">
    <h3> {props.user.name}'s favorite recipes </h3>
    <div >
      {props.user.favorites ?
      <div >
      {props.user.favorites.map((recipe) =>
        <Recipe
          recipe={recipe}
          user={props.user}
          recipeMatch={props.recipeMatch}
          handleFavorite={props.handleFavorite}
        />
      )}
      </div>
    :
      <h4> Once you favorite a recipe, it'll show up here </h4>
    }
    </div>
    </div>
  );

};

export default UserRecipes;
