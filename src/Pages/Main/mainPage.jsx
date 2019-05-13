import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import IngredientArea from '../../Components/IngredientArea/IngredientArea';
import RecipeArea from '../../Components/RecipeArea/RecipeArea';
import recipeService from '../../utils/recipeService';
import userService from '../../utils/userService';



class MainPage extends Component {

  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    //move your map here

    return (
      <div className="mainPage">
        <IngredientArea
          ingredients={this.props.ingredients}
          text={this.props.text}
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
          handleRemove={this.props.handleRemove}
        />
        <RecipeArea
          recipeMatch={this.props.recipeMatch}
          handleFavorite={this.props.handleFavorite}
          getUser={this.props.getUser}
          user={this.props.user}
         />
      </div>
    );
  }
}


export default MainPage;
