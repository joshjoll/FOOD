import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

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
      user: null,
    };
  }

  refreshuser = () =>  {
    userService.getUser();
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

  getUser () {
/*    const user = userService.getUser();
    console.log('getUser');
    this.setState({ user: user });
    console.log('state updated');*/
  }

  async componentDidMount() {
    const user = userService.getUser();
    this.setState({ user });
    // this.getUser();

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
              user = {this.state.user}
              handleFavorite={this.handleFavorite}
              getUser={this.getUser}
              // ingredients={this.state.ingredients}
              // recipeMatch={this.state.recipeMatch}
              // text={this.state.text}
              // handleChange={this.handleChange}
              // handleSubmit={this.handleSubmit}
              // handleRemove={this.handleRemove}
            />
          } />
          <Route exact path='/profile' render={({history}) =>
            <ProfilePage
              user={this.state.user}
              history={history}
            />
          } />
          <Route exact path='/login' render={({history}) =>
            <LoginPage
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          } />
          <Route exact path='/newRecipe' render={({history}) =>
            userService.getUser() ?
            <RecipePage
              history={history}
            />
            :
            <Redirect to='/login' />
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
