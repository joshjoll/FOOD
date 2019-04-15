const Recipe = require('../models/recipe');


module.exports = {
  newRecipe,
  filterRecipe,
};

async function newRecipe(req, res) {
  console.log('reached controller');
  const recipe = new Recipe(req.body);
  try {
    await recipe.save();
    res.json();
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function filterRecipe(req, res) {
  console.log('reached controller filter');
  const ingredient = req.body;
  console.log(ingredient.length);

  var recipes = await Recipe.find({});
  results = () => {
    for (let i = 0; i <  ingredient.length; i++) {
      recipes = recipes.filter(recipe => recipe.Ingredients.includes(ingredient[i]));
      // if (recipes.length === 0) {
      //   recipes = ['something']
      // } else {
      //   return recipes
      // }
    }
    return recipes;
  }
  response = results();
  console.log(response);
  res.json(response);
}
