import React from 'react';
import Ingredient from '../Ingredient/Ingredient';

const IngredientRow = (props) => (
  <div className="IngredientRow" >
  {props.ingredients.map((ingredient, idx) =>
    <Ingredient
      ingredients={ingredient}
      key={idx}
      handleRemove={props.handleRemove}
    />
  )}
  </ div>
);

export default IngredientRow;
