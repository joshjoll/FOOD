const Recipe = require('../models/recipe');


module.exports = {
  newRecipe,
};

async function newRecipe(req, res) {
  console.log('reached controller');
  const recipe = new Recipe(req.body);
  try {
    await recipe.save();
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}
