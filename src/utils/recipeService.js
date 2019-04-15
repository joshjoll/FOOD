const BASE_URL = '/api/recipe/';

export default {
  newRecipe,
};

function newRecipe(recipe) {
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(recipe)
  };
  return fetch(BASE_URL, options)
  .then(res => {
    console.log('userServices');
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('we messed up!');
  })
  // Parameter destructuring!
  // .then(({token}) => tokenService.setToken(token));
  // The above could have been written as
  //.then((token) => token.token);
}
