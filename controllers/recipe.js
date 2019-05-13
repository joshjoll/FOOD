const Recipe = require('../models/recipe');


module.exports = {
  newRecipe,
  filterRecipe,
  getAll,
};


/*
Returns initial batch of recipes on home page
Want to add in randomization of which recipes are returned
*/
async function getAll(req, res) {
  const all = await Recipe.find({})
  .limit(18);
  res.json(all);
}

/*Adds new recipe to database*/
async function newRecipe(req, res) {
  console.log('reached recipe controller')
  const recipe = new Recipe(req.body);
  recipe.recipeName = req.body.recipeName,
  recipe.recipeLink = req.body.recipeLink,
  recipe.recipeImg = req.body.recipeImg,
  recipe.Ingredients = req.body.Ingredients,
  recipe.vegetarian = req.body.vegetarian ? true : false,
  recipe.vegan = req.body.vegan ? true : false,
  recipe.dairyFree = req.body.dairyFree ? true : false,
  recipe.glutenFree = req.body.glutenFree ? true : false,
  recipe.ketogenic = req.body.ketogenic ? true : false;
  try {
    await recipe.save();
    res.json('success');
  } catch (err) {
    res.status(400).json(err);
  }
}

/*Filters through database for recipes matching the ingredients in state*/
async function filterRecipe(req, res) {
  console.log('reached controller filterRecipe');
  const ingredient = req.body.ingredients;
  const user = req.body.user;

  var recipes = await Recipe.find({});
  results = () => {
    /*Filters through user inputted ingredients*/
    for (let i = 0; i <  ingredient.length; i++) {
      recipes = recipes.filter(recipe => recipe.Ingredients.includes(ingredient[i]));
    }
    /*If logged in, filters results of ingredients filter through user's dietary preferences*/
    if (user) {
      user.vegetarian ? (vegetarian = recipes.filter(recipe => recipe.vegetarian == true)) : vegetarian = recipes;
      user.vegan ? (vegan = vegetarian.filter(recipe => recipe.vegan == true)) : vegan = vegetarian;
      user.ketogenic ? (ketogenic = vegan.filter(recipe => recipe.ketogenic == true)) : ketogenic = vegan;
      user.dairyFree ? (dairyFree = ketogenic.filter(recipe => recipe.dairyFree == true)) : dairyFree = ketogenic;
      user.glutenFree ? (glutenFree = dairyFree.filter(recipe => recipe.glutenFree == true)) : glutenFree = dairyFree;
      return dairyFree;
    } else {
      return recipes
    }
  }
  response = results();
  res.json(response);
}
