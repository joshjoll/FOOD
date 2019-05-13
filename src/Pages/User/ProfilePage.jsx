import React from 'react';
import UserPreferences from '../../Components/UserPreferences/UserPreferences';
import UserRecipes from '../../Components/UserRecipes/UserRecipes';
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
        recipeMatch={props.recipeMatch}
        handleFavorite={props.handleFavorite}
      />
    </div>
  :
    <div>
    <h1>....Loading....</h1>
    </div>
  );

};


export default ProfilePage;
