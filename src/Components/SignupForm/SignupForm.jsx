import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: '',
    vegetarian: '',
    vegan: '',
    glutenFree: '',
    dairyFree: '',
    ketogenic: '',
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleCheck = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();

      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
      console.log('submitted');
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div>
        <header className="header-footer">Sign Up</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email"  name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
            </div>
          </div>
          //start buttons
          <div className="form-group">
            <div className="col-sm-12">
              <label htmlFor="vegetarian">Vegetarian</label>
              <input type="checkbox" className="form-control"  name="vegetarian"  onChange={this.handleCheck} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label htmlFor="vegan">Vegan</label>
              <input type="checkbox" className="form-control"  name="vegan" onChange={this.handleCheck} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label htmlFor="glutenFree">Gluten Free</label>
              <input type="checkbox" className="form-control"  name="glutenFree" onChange={this.handleCheck} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label htmlFor="dairyFree">Dairy Free</label>
              <input type="checkbox" className="form-control" name="dairyFree" onChange={this.handleCheck} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label htmlFor="ketogenic">Ketogenic</label>
              <input type="checkbox" className="form-control"  name="ketogenic" onChange={this.handleCheck} />
            </div>
          </div>
          //end buttons
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default SignupForm;
