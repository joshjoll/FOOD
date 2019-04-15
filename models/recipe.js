const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const recipeSchema = new mongoose.Schema({
  recipeName: {type: String, required: true, lowercase: true},
  recipeLink: {type: String, required: true, lowercase: true},
  recipeImg: {type: String, required: true, lowercase: true},
  Ingredients: [],
}, {
  timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);
