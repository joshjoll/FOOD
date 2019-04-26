import React from 'react';
import UserPreferences from '../../Components/UserPreferences/UserPreferences';
import UserRecipes from '../../Components/UserRecipes/UserRecipes';
import UserNewRecipes from '../../Components/UserNewRecipes/UserNewRecipes';
// import { Link } from 'react-router-dom';


const ProfilePage = (props) => {
  return (

    <div className="profile">
      <h2 className="welcome">Welcome, {props.user.name}</h2>
      <UserPreferences
        user={props.user}
        />
      <UserNewRecipes
        user={props.user}
      />
      <UserRecipes
        user={props.user}
      />
    </div>

  );

};

export default ProfilePage;
