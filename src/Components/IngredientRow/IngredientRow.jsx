import React from 'react';
import Ingredient from '../Ingredient/Ingredient';

const IngredientRow = (props) => (
  <div className="IngredientRow" >
  {props.ingredients.map((ingredient) =>
    <Ingredient
      ingredients={ingredient}
      key={ingredient.id}
      handleRemove={props.handleRemove}
    />
  )}
  </ div>
);

export default IngredientRow;
