import React, { Component } from 'react';
import './App.css';

import MainPage from '../Main/mainPage.jsx';
import ProfilePage from '../User/ProfilePage.jsx';
import NavBar from '../../Components/NavBar/NavBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      ingredients: ['salt', 'pepper', 'bologna', 'tomato'],
      recipeMatch: ['watermelon', 'water', 'banana', 'deer', 'cauliflower', 'chicken'],

    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      ingredients: this.state.ingredients.concat([this.state.text])
    });
    this.setState({ text: '' });
  };

  handleRemove = e => {
    console.log(e)
    // e.preventDefault();
    let array = [...this.state.ingredients]
    let idx = array.indexOf(e);
    array.splice(idx, 1);
    this.setState({ ingredients: array });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <MainPage
          ingredients={this.state.ingredients}
          recipeMatch={this.state.recipeMatch}
          text={this.state.text}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleRemove={this.handleRemove}
        />
        <ProfilePage />
      </div>
    );
  }
}

export default App;
