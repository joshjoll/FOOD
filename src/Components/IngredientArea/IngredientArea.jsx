import React from 'react';
import AddIngredient from '../AddIngredient/AddIngredient';
import IngredientRow from '../IngredientRow/IngredientRow';
import './IngredientArea.css'

const IngredientArea = (props) => (
  <div className="IngredientArea">
    <AddIngredient
    text={props.text}
    handleChange={props.handleChange}
    />
    <IngredientRow
      ingredients={props.ingredients}
    />
  </div>
);

export default IngredientArea;
