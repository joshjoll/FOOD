const express = require('express');
const router = express.Router();
const Recipe = require('../../models/recipe');
const recipeCtrl = require('../../controllers/recipe');

/*---------- Public Routes ----------*/
router.post('/', recipeCtrl.newRecipe);
router.post('/filter', recipeCtrl.filterRecipe);


/*---------- Protected Routes ----------*/




module.exports = router;
