import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import './App.css';
import MainPage from '../Main/mainPage.jsx';
import ProfilePage from '../User/ProfilePage.jsx';
import NavBar from '../../Components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import RecipePage from '../RecipePage/RecipePage';
import userService from '../../utils/userService';
import recipeService from '../../utils/recipeService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      ingredients: ['salt', 'pepper', 'bologna', 'tomato'],
      recipeMatch: ['salt'],

    };
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      ingredients: [...this.state.ingredients, this.state.text],
      text: ''
    }, () => recipeService.filterRecipe(this.state.ingredients));


  };

  handleRemove = e => {
    console.log(e)
    // e.preventDefault();
    let array = [...this.state.ingredients]
    let idx = array.indexOf(e);
    array.splice(idx, 1);
    this.setState({ ingredients: array });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });

  };

  async componentDidMount() {
    const user = userService.getUser();
    this.setState({ user });

  }

  render() {
    return (
      <div className="App">
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/' render={() =>
            <MainPage
              // ingredients={this.state.ingredients}
              // recipeMatch={this.state.recipeMatch}
              // text={this.state.text}
              // handleChange={this.handleChange}
              // handleSubmit={this.handleSubmit}
              // handleRemove={this.handleRemove}
            />
          } />
          <Route exact path='/profile' render={() =>
            <ProfilePage />
          } />
          <Route exact path='/login' render={({history}) =>
            <LoginPage
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          } />
          <Route exact path='/newRecipe' render={({history}) =>
            <RecipePage
              history={history}
            />
          } />
          <Route exact path='/signup' render={({history}) =>
            <SignupPage
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          } />

        </Switch>
      </div>
    );
  }
}

export default App;
