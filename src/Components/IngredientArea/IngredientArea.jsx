import React from 'react';
import AddIngredient from '../AddIngredient/AddIngredient';
import IngredientRow from '../IngredientRow/IngredientRow';
import './IngredientArea.css'

const IngredientArea = (props) => (
  <div className="IngredientArea">
    <AddIngredient
    text={props.text}
    handleChange={props.handleChange}
    handleSubmit={props.handleSubmit}
    />
    <IngredientRow
      ingredients={props.ingredients}
      handleRemove={props.handleRemove}
    />
  </div>
);

export default IngredientArea;
