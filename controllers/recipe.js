const Recipe = require('../models/recipe');


module.exports = {
  newRecipe,
  filterRecipe,
  getAll,
};

async function getAll(req, res) {
  const all = await Recipe.find({})
  .limit(18);
  res.json(all);
}

async function newRecipe(req, res) {
  const recipe = new Recipe(req.body);
  recipe.recipeName = req.body.recipeName,
  recipe.recipeLink = req.body.recipeLink,
  recipe.recipeImg = req.body.recipeImg,
  recipe.Ingredients = req.body.Ingredients,
  recipe.vegetarian = req.body.vegetarian ? true : false,
  recipe.vegan = req.body.vegan ? true : false,
  recipe.dairyFree = req.body.dairyFree ? true : false,
  recipe.glutenFree = req.body.glutenFree ? true : false,
  recipe.ketogenic = req.body.ketogenic ? true : false,
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
  console.log('reached controller filterRecipe');
  const ingredient = req.body.ingredients;
  const user = req.body.user;
  console.log(ingredient);
  console.log(user);

  var recipes = await Recipe.find({});
  results = () => {
    for (let i = 0; i <  ingredient.length; i++) {
      recipes = recipes.filter(recipe => recipe.Ingredients.includes(ingredient[i]));
    }
    if (user) {
      user.vegetarian ? (vegetarian = recipes.filter(recipe => recipe.vegetarian == true)) : vegetarian = recipes;
      user.vegan ? (vegan = vegetarian.filter(recipe => recipe.vegan == true)) : vegan = vegetarian;
      user.ketogenic ? (ketogenic = vegan.filter(recipe => recipe.ketogenic == true)) : ketogenic = vegan;
      user.dairyFree ? (dairyFree = ketogenic.filter(recipe => recipe.dairyFree == true)) : dairyFree = ketogenic;
      user.glutenFree ? (glutenFree = dairyFree.filter(recipe => recipe.glutenFree == true)) : glutenFree = dairyFree;
      console.log(dairyFree)
      return dairyFree;
    } else {
      return recipes
    }
  }
  response = results();
  // console.log(response);
  res.json(response);
}
