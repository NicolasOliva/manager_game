const mongoose = require('mongoose'),
      bcrypt = require('bcrypt'),   
      uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    username: {type: String, unique: true, required: [true, 'The name is required']},
    email: {type: String, unique: true, required: [true, 'The email is required']},
    password: {type: String, unique: true, required: [true, 'The password is required']},
    state: {Type: Boolean, default: true, required: [true, 'The state is required']}
}); 

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
}; 

userSchema.methods.comparePassword = (password) => {
    return bcrypt.comparePassword(password, this.password)
}; 

userSchema.plugin(uniqueValidator,{message:'{PATH} must be unique'})

module.exports = mongoose.model('Users',userSchema);