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
      text: '',
      ingredients: [],
      recipeMatch: [this.returnAll()],
      user: null,
    };
  }

  //Refactored code starts here

  async returnAll() {
    const res  = await recipeService.getAll()
    const result = [...res];
    this.setState({
      recipeMatch : result
    })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

/*  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      text: '',
    });
    if (this.state.user) {
      async () => {
        const res  = await recipeService.filterRecipe(this.state.ingredients, this.state.user);
        const result = [...res];
        this.setState({
          recipeMatch: result,
        });
      };
    }
  };*/

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.user) {
      this.setState({
        ingredients: this.state.ingredients.concat([this.state.text]),
        text: '',
      }, async () => {
        const res  = await recipeService.filterRecipe(this.state.ingredients, this.state.user);
        const result = [...res];
        this.setState({
          recipeMatch: result,
        });
      });
    } else {
      this.setState({
        ingredients: this.state.ingredients.concat([this.state.text]),
        text: '',
      }, async () => {
        const res  = await recipeService.filterRecipe(this.state.ingredients, null);
        const result = [...res];
        this.setState({
          recipeMatch: result,
        });
      });
    }
  };

  handleRemove = e => {
    // e.preventDefault();


    let array = [...this.state.ingredients]
    let idx = array.indexOf(e);
    array.splice(idx, 1);
    this.setState({ ingredients: array }, async () => {
      const res  = await recipeService.filterRecipe(this.state.ingredients, this.state.user)
      const result = [...res]
       this.setState({
        recipeMatch : result
      });
    })
  }

  handleFavorite = idx => {
    const favorited = this.state.recipeMatch[idx];
    // console.log(favorited);
    userService.addFavorite(favorited, this.state.user);
    this.refreshUser();
    console.log('end of handleFavorite')
  };

  //Refactored code ends here

  async refreshUser() {
    this.setState({ user: await userService.refreshUser(this.state.user) });
    console.log(this.state.user);
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
    this.returnAll();
  };


/*To Delete*/
  /*  handleSubmit = e => {
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
    };*/


  async componentDidMount() {
    const user = userService.getUser();
    this.setState({ user: await userService.refreshUser(user) });
    /*this.setState({ user });*/
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
              getUser={this.getUser}
              ingredients={this.state.ingredients}
              recipeMatch={this.state.recipeMatch}
              text={this.state.text}
              returnAll={this.returnAll}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleRemove={this.handleRemove}
              handleFavorite={this.handleFavorite}
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
