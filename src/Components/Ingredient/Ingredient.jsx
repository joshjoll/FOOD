import React from 'react';

import './Ingredient.css'

const Ingredient = (props) => (
  <div className="AddedIngredient" >
    <span onClick={() => (props.handleRemove(props.ingredients))}>X</span>&nbsp;&nbsp;{props.ingredients}
  </div>
);

export default Ingredient;
