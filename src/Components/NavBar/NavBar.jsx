import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


const NavBar = (props) => {
  var nav = props.user ?
    <nav className="NavBar">
      <Link to='/'>New Search </Link>
      <Link to='/profile'>Profile </Link>
      <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
    </nav>
    :
    <nav className="NavBar">
      <Link to='/'>New Search </Link>
      <Link to='/login'>Log In </Link>
    </nav>
  return (
    <div className="NavBar">
      {nav}
    </div>
  )
};

export default NavBar;
