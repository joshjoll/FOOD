import React from 'react';
// import { Link } from 'react-router-dom';
import IngredientArea from '../../Components/IngredientArea/IngredientArea';
import RecipeArea from '../../Components/RecipeArea/RecipeArea';


const MainPage = (props) => {
  return (
    <div className="mainPage">
      <IngredientArea
        ingredients={props.ingredients}
        text={props.text}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        handleRemove={props.handleRemove}
      />
      <RecipeArea
      recipeMatch={props.recipeMatch}
      ingredients={props.ingredients}
      />
    </div>
  );

};

export default MainPage;
