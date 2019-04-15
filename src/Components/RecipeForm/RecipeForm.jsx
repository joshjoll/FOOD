import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import recipeService from '../../utils/recipeService';

class RecipeForm extends Component {

  state = {
    recipeName: '',
    recipeLink: '',
    recipeImg: '',
    Ingredients: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleRecipe = (e) => {
    alert('working')
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //replace with recipeService.newRecipe
      await recipeService.newRecipe(this.state);
      //replace with function for submitting recipe -- must split ingredient items
      this.handleRecipe();

      // no change
      // this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
      console.log('submitted');
    }
  }

  render() {
    return (
      <div>
        <header className="header-footer">Add a new Recipe</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Recipe Name" value={this.state.recipeName} name="recipeName" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="url" className="form-control" placeholder="Link to Recipe"  name="recipeLink" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="url" className="form-control" placeholder="Link to Recipe Image" value={this.state.password} name="recipeImg" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="List of Ingredients Separated with a Comma" name="Ingredients" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default">Sign Up</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
            <p>{this.state.message}</p>
          </div>
        </form>
      </div>
    );
  }
};

export default RecipeForm;
