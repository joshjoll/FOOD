const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const recipeSchema = new mongoose.Schema({
  recipeName: {type: String, required: true, lowercase: true},
  recipeLink: {type: String, required: true, lowercase: true},
  recipeImg: {type: String, required: true, lowercase: true},
  Ingredients: [],
  vegetarian: {
    type: Boolean,
    default: false,
  },
  vegan: {
    type: Boolean,
    default: false,
  },
  glutenFree: {
    type: Boolean,
    default: false,
  },
  dairyFree: {
    type: Boolean,
    default: false,
  },
  ketogenic: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);
