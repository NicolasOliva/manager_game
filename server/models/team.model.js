const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator'); 


const teamSchema = mongoose.Schema({
    name: {type: String, unique: true, required: [true, 'The name is required']},
    state: {type: Boolean, default: true, required: [true, 'The state is required']}
})

teamSchema.plugin(uniqueValidator, {message: '{PHAT} must be unique'}); 

module.exports = mongoose.model('Teams', teamSchema);