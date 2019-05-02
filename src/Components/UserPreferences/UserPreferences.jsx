import React from 'react';
import '../../Pages/User/ProfilePage.css';
// import { Link } from 'react-router-dom';


const UserPreferences = (props) => {
  return (
    <div className="userPreferences">
    <h3>Your Dietary Preferences</h3>
    <ul>
    <li>Ketogenic? {props.user.ketogenic ? "Yes Please" : 'Nope'}</li>
    <li>Dairy Free? {props.user.dairyFree ? "Yes Please" : 'Nope'}</li>
    <li>Vegetarian? {props.user.vegetarian ? "Yes Please" : 'Nope'}</li>
    <li>Vegan? {props.user.vegan ? "Yes Please" : 'Nope'}</li>
    <li>Gluten Free? {props.user.glutenFree ? "Yes Please" : 'Nope'}</li>
    </ul>
    </div>
  );

};

export default UserPreferences;
