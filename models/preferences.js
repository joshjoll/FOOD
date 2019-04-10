var mongoose = require('mongoose');
var Schema = mongoose.Schema'

var preferencesSchema = new mongoose.Schema({
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
  email: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Preferences', preferencesSchema);
