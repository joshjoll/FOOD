const express = require('express');
const router = express.Router();
const Recipe = require('../../models/recipe');
const recipeCtrl = require('../../controllers/recipe');

/*---------- Public Routes ----------*/
router.post('/filter', recipeCtrl.filterRecipe);
router.get('/getAll', recipeCtrl.getAll);


/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));
router.post('/', checkAuth, recipeCtrl.newRecipe);


function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}


module.exports = router;
