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
      text: '',
      ingredients: [],
      recipeMatch: [this.returnAll()],
    };
  }

  handleFavorite = idx => {
    const favorited = this.state.recipeMatch[idx]._id;
    console.log(favorited)
    console.log('handleFavorite ' + idx);
    const res = userService.addFavorite(favorited, this.props.user)

    this.setState({
      user: res
    })
  }

  async returnAll() {
    const res  = await recipeService.getAll()
    // console.log(res)
    const result = [...res];
    this.setState({
      recipeMatch : result
    })
  }


  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      ingredients: this.state.ingredients.concat([this.state.text]),/*[...this.state.ingredients, this.state.text],*/
      text: ''
    }, async () => {
      const res  = await recipeService.filterRecipe(this.state.ingredients, this.props.user)
      // console.log(res)
      const result = [...res]
       this.setState({
        recipeMatch : result
      });
    },
  )
  };


  handleRemove = e => {
    // e.preventDefault();
    let array = [...this.state.ingredients]
    let idx = array.indexOf(e);
    array.splice(idx, 1);
    this.setState({ ingredients: array }, async () => {
      const res  = await recipeService.filterRecipe(this.state.ingredients, this.props.user)
      // console.log(res[0].recipeName)
      const result = [...res]
       this.setState({
        recipeMatch : result
      });
    })
  }


  render() {
    //move your map here

    return (
      <div className="mainPage">
        <IngredientArea
          ingredients={this.state.ingredients}
          text={this.state.text}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleRemove={this.handleRemove}
        />
        <RecipeArea
          recipeMatch={this.state.recipeMatch}
          handleFavorite={this.handleFavorite}
         />
      </div>
    );
  }
}


export default MainPage;
