import tokenService from './tokenService';

const BASE_URL = '/api/recipe/';

export default {
  newRecipe,
  filterRecipe,
  getAll,
};

function newRecipe(recipe) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      /*'Authorization': 'Bearer ' + tokenService.getToken()*/
    },
    body: JSON.stringify(recipe),
  };
  return fetch(BASE_URL, options)
  .then(res => {
    console.log('post api request');
    throw new Error('we messed up!');
  })
}

function filterRecipe(ingredients, user) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ ingredients, user }),
  };
  return fetch(BASE_URL + 'filter', options).then(res => {
      return res.clone().json();
  })
}
function getAll() {
  const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  };
  return fetch(BASE_URL + 'getAll', options).then(res => {
    return res.clone().json();
  });
}
