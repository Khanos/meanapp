var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

// Create the MovieSchema.
var NewUserSchema = new mongoose.Schema({
  username: {
    type: String,
    index: true, 
    unique: true,
    required: true
  },
  email: {
    type: String,       
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
NewUserSchema.plugin(uniqueValidator, { message: 'Error, se espera que {PATH} sea unico.' });

// Export the model schema.
module.exports = NewUserSchema;