import React from 'react';
import UserPreferences from '../../Components/UserPreferences/UserPreferences';
import UserRecipes from '../../Components/UserRecipes/UserRecipes';
// import { Link } from 'react-router-dom';


const ProfilePage = (props) => {
  return (
    <div >
    <h2>Welcome, {props.user.name}</h2>
    <UserPreferences
      user={props.user}
    />
    <UserRecipes
      user={props.user}
    />
    </div>
  );

};

export default ProfilePage;
