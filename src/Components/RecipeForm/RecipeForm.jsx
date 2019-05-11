import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import recipeService from '../../utils/recipeService';

class RecipeForm extends Component {

  state = {
    recipeName: '',
    recipeLink: '',
    recipeImg: '',
    Ingredients: '',
    vegetarian: '',
    vegan: '',
    glutenFree: '',
    dairyFree: '',
    ketogenic: '',
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    const ing = e.target.value.split(', ');
    console.log(ing);
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value,
      Ingredients: e.target.value.split(', ')
    });
  }

  handleCheck = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };

  handleRecipe = (e) => {
    console.log('working')
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handle submit')
    try {
      await recipeService.newRecipe(this.state);
      this.handleRecipe();
      //replace with function for submitting recipe -- must split ingredient items
      console.log('submitted');
      this.props.history.push('/');
    } catch (err) {
      this.props.updateMessage(err.message);
      console.log('error');
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


            <div className="col-sm-12">
              <label htmlFor="vegetarian">Vegetarian?&nbsp;&nbsp;&nbsp;</label>
              <input type="checkbox" className="form-control"  name="vegetarian"  onChange={this.handleCheck} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label htmlFor="vegan">Vegan?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input type="checkbox" className="form-control"  name="vegan" onChange={this.handleCheck} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label htmlFor="glutenFree">Gluten Free?&nbsp;&nbsp;</label>
              <input type="checkbox" className="form-control"  name="glutenFree" onChange={this.handleCheck} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label htmlFor="dairyFree">Dairy Free?&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input type="checkbox" className="form-control" name="dairyFree" onChange={this.handleCheck} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label htmlFor="ketogenic">Ketogenic?&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input type="checkbox" className="form-control"  name="ketogenic" onChange={this.handleCheck} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default">Submit Recipe</button>&nbsp;&nbsp;
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

/*import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import recipeService from '../../utils/recipeService';

class RecipeForm extends Component {

  state = {
    recipeName: '',
    recipeLink: '',
    recipeImg: '',
    Ingredients: '',
    vegetarian: '',
    vegan: '',
    glutenFree: '',
    dairyFree: '',
    ketogenic: '',
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    const ing = e.target.value.split(', ');
    console.log(ing);
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value,
      Ingredients: e.target.value.split(', ')
    });
  }

  handleCheck = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };

  handleRecipe = (e) => {
    console.log('working')
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //replace with recipeService.newRecipe
      await recipeService.newRecipe(this.state);
      this.handleRecipe();
      //replace with function for submitting recipe -- must split ingredient items
      console.log('submitted');

      // no change
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
      console.log('error');
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
            <h2>Tell us more. Is this recipe: </h2>
            <div className="col-sm-12">
              <label htmlFor="vegetarian">Vegetarian?&nbsp;&nbsp;&nbsp;</label>
              <input type="checkbox" className="form-control"  name="vegetarian"  onChange={this.handleCheck} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label htmlFor="vegan">Vegan?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input type="checkbox" className="form-control"  name="vegan" onChange={this.handleCheck} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label htmlFor="glutenFree">Gluten Free?&nbsp;&nbsp;</label>
              <input type="checkbox" className="form-control"  name="glutenFree" onChange={this.handleCheck} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label htmlFor="dairyFree">Dairy Free?&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input type="checkbox" className="form-control" name="dairyFree" onChange={this.handleCheck} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label htmlFor="ketogenic">Ketogenic?&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input type="checkbox" className="form-control"  name="ketogenic" onChange={this.handleCheck} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default">Submit Recipe</button>&nbsp;&nbsp;
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
*/
