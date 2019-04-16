const Recipe = require('../models/recipe');


module.exports = {
  newRecipe,
  filterRecipe,
  getAll,
};

async function getAll(req, res) {
  const all = await Recipe.find({})
  .limit(18);
  console.log(all);
  res.json(all);
}

async function newRecipe(req, res) {
  console.log('reached controller');
  const recipe = new Recipe(req.body);
  recipe.recipeName = req.body.recipeName,
  recipe.recipeLink = req.body.recipeLink,
  recipe.recipeImg = req.body.recipeImg,
  recipe.Ingredients = req.body.Ingredients,
  console.log(req.body );
  console.log(recipe + 'recipe');
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
    // var fixed = recipes.Ingredients.toUpperCase();
    // console.log(recipe.Ingredients.toUpperCase());
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
