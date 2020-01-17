const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator');
      
const teamSchema = mongoose.Schema({
    name: {type: String, unique: true, required: [true, 'The name is required']},
    state: {type: Boolean, default: true, required: [true, 'The state is required']}
})

teamSchema.methods.toJSON = function () {  //(toJSON) NODE AUTOMATIC FUNCTION : the endpoint always return object json whitout the state
    const obj = this.toObject();
    delete obj.state;
    return obj;
}

teamSchema.plugin(uniqueValidator, {message: '{PHAT} must be unique'}); 

module.exports = mongoose.model('Teams', teamSchema);