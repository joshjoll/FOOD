import React from 'react';
import './Recipe.css';

const Recipe = (props) => (
  <div className="recipe">
    {props.recipe}
  </div>
);

export default Recipe;
