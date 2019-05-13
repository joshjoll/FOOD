import React from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';

const Recipe = (props) => {
  function favorited() {
    if (props.user) {
    for (let i = 0; i < props.user.favorites.length; i++) {
      if (props.user.favorites[i]._id == props.recipe._id) {
        return true;
        {break;}
      }
    }
    }
  }
  return (
      <div key={props.index} className="recipe noDec">
        <a href={props.recipe.recipeLink} target="_blank" className="noDec">
          <img src={props.recipe.recipeImg} />
          <p className="noDec"> {props.recipe.recipeName}</p>
        </a>
        { props.user ? favorited() ?
          <p className="favoriteBtn">Favorited</p>
          :
          <button
          onClick={ () => { props.handleFavorite(props.index) }}
          className="favoriteBtn">
          ADD TO FAVORITES
          </button>
        :
        <Link to='/login' className='favoriteBtn'>ADD TO FAVORITES</Link>
        }
      </div>
  );
};
/*{ this.favorited() ?
  <p>Favorited</p>
  :
  <button
  onClick={ () => { props.handleFavorite(props.index) }}
  className="favoriteBtn">
  ADD TO FAVORITES
  </button>
}*/
export default Recipe;
