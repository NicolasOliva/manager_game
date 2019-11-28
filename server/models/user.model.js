const mongoose = require('mongoose'),
      bcrypt = require('bcrypt'),   
      uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    username: {type: String, unique: true, required: [true, 'The name is required']},
    email: {type: String, unique: true, required: [true, 'The email is required']},
    password: {type: String, required: [true, 'The password is required']},
    state: {type: Boolean, default: true, required: [true, 'The state is required']}
}); 

userSchema.pre(['save', 'findByIdAndUpdate'], async function () {
    if(this._update) { // for findByIdAndUpdate
        this._update.password = await bcrypt.hashSync(this._update.password, 10)
    }else { //for Save
        this.password = await bcrypt.hashSync(this.password, 10)
    }
});

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = (password) => {
    return bcrypt.comparePassword(password, this.password)
}; 

userSchema.methods.toJSON = function() { //(toJSON) NODE AUTOMATIC FUNCTION : the endpoint always return object json whitout the password and state
    var obj = this.toObject();
    delete obj.password;
    delete obj.state;
    return obj;
}

userSchema.plugin(uniqueValidator,{message:'{PATH} must be unique'})

module.exports = mongoose.model('Users',userSchema);