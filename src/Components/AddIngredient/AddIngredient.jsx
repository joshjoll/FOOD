import React from 'react';

const AddIngredient = (props) => (
  <div>
    <form onSubmit={props.handleSubmit}>
      <label>
        Ingredients on Hand:&nbsp;&nbsp;&nbsp;
      </label>
      <input
      name="text"
      value={props.text}
      onChange={props.handleChange}
              />
      <button > Add Ingredient </button>
    </form>
  </div>
);

export default AddIngredient;
