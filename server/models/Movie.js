var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

// Create the MovieSchema.
var MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    index: true,
    unique: true,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  description: {
  	type: String,
  	required: true
  }
});
MovieSchema.plugin(uniqueValidator, { message: 'Error, se espera que {PATH} sea unico.' });

// Export the model schema.
module.exports = MovieSchema;