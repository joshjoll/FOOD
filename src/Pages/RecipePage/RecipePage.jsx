import React, { Component } from 'react';
import RecipeForm from '../../Components/RecipeForm/RecipeForm';
// import './SignupPage.css';

class RecipePage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='SignupPage'>
        <RecipeForm {...this.props} updateMessage={this.updateMessage} />

      </div>
    );
  }
};

export default RecipePage;