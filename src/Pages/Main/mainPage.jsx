import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import IngredientArea from '../../Components/IngredientArea/IngredientArea';
import RecipeArea from '../../Components/RecipeArea/RecipeArea';
import recipeService from '../../utils/recipeService';


class MainPage extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
      ingredients: [],
      recipeMatch: [this.returnAll()],
    };
  }

  async returnAll() {
    const res  = await recipeService.getAll()
    // console.log(res[0].recipeName)
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
      console.log(this.props.user)
      const res  = await recipeService.filterRecipe(this.state.ingredients, this.props.user)
      const result = [...res]
       this.setState({
        recipeMatch : result
      })

      ;
      /*this.setState({receipeMatch: this.state.recipeMatch.concat(res) });
      console.log(this.state.recipeMatch);
      return res;*/
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

        {this.state.recipeMatch ?
          <div className="recipeArea">
            {this.state.recipeMatch.map((recipe, index) =>
              <a href={recipe.recipeLink}target="_blank" className="noDec">
                <div className="recipe " key={index}>
                  <img src={recipe.recipeImg} className="noDec"/>
                  <p className="noDec"> {recipe.recipeName}</p>

                  </div>
                </a>
          )}
          </div>
          :
          <div>
          <p> nothing was found </p>
          </div>
      }
      </div>
    );
  }
}


export default MainPage;
