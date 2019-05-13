import React from 'react';
import Recipe from '../Recipe/Recipe';

// import { Link } from 'react-router-dom';


const UserNewRecipes = (props) => {
  return (
    <div >
    <h3> {props.user.name}'s favorite recipes usernewfavorites</h3>
      {props.user.favorites ?
      <div className="UserNewRecipes">
      {props.user.favorites.map((recipe) =>
        <Recipe
          recipe={recipe}
        />
      )}
      </div>
    :
      <h4> Once you favorite a recipe, it'll show up here </h4>
    }
    </div>
  );

};

export default UserNewRecipes;
