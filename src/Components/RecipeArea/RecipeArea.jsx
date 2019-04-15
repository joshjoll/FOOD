import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './HighScoresPage.module.css';
import searchService from '../../utils/searchServices';
import Recipe from '../Recipe/Recipe';

// class RecipeArea extends Component {
//
//
//   async componentDidMount() {
//
//   }
//
//   render() {
//     return(
//       <div className="RecipeArea" >
//       {this.props.recipeMatch.map((recipe) =>
//         <Recipe
//           ingredients={recipe}
//           key={recipe.id}
//           // handleRemove={props.handleRemove}
//         />
//       )}
//       </ div>
//     )
//
//   }
// }



const RecipeArea = (props) => (
  <div className="recipeArea">

    {props.recipeMatch.map((recipe) =>
      <Recipe
        recipe={recipe}
      />
    )}
  </div>
);

export default RecipeArea;
