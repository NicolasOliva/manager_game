const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator'); 

const placeSchema = mongoose.Schema({
    name: {type: String, unique: true, required: [true, 'The name is required']},
    users: [{type: mongoose.Schema.Types.ObjectId, ref: 'Users',    required: true}], //all users of the place
    admins: [{type: mongoose.Schema.Types.ObjectId, ref: 'users', required: [true, 'Must have an administrator']}], //all user who are administrators
    state: {type: Boolean, default: true, required: [true, 'The state is required']}
}); 

placeSchema.pre('save', function (next) { //validation arrays users and admins. Not empty
    if(this.users < 1){
        throw({error: 'Must have an user'})
    } else if (this.admins < 1){
        throw({error: 'Must have an administrator'})
    }
    next()    
});

placeSchema.methods.toJSON = function() { //(toJSON) NODE AUTOMATIC FUNCTION : the endpoint always return object json whitout the state
    var obj = this.toObject();
    delete obj.state;
    return obj;
}

placeSchema.plugin(uniqueValidator,{message: '[PHAT] must be unique'}); 

module.exports = mongoose.model('Places', placeSchema);