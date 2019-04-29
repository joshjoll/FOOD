import React from 'react';
import UserPreferences from '../../Components/UserPreferences/UserPreferences';
import UserRecipes from '../../Components/UserRecipes/UserRecipes';
import UserNewRecipes from '../../Components/UserNewRecipes/UserNewRecipes';
// import { Link } from 'react-router-dom';


const ProfilePage = (props) => {
  return (
    props.user ?
    <div className="profile">
      <h2 className="welcome">Welcome, {props.user.name}</h2>
      <UserPreferences
        user={props.user}
        />
      <UserRecipes
        user={props.user}

      />
    </div>
  :
    <div>
    <h1>....Loading....</h1>
    </div>
  );

};


export default ProfilePage;
