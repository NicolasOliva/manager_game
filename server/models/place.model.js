const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator'); 

const placeSchema = mongoose.Schema({
    name: {type: String, unique: true, required: [true, 'The name is required']},
    teams: [{type: Schema.Types.ObjectId, ref: 'Teams', required: [true, 'The teams is required'] }],
    games: [{type: Schema.Types.ObjectId, ref: 'Games'}],
    users: [{type: Schema.Types.ObjectId, ref: 'Users', required: [true, 'Must have an user']}], //all users of the place
    admins: [{type: Schema.Types.ObjectId, ref: 'Users', required: [true, 'Must have an administrator']}], //all user who are administrators
    state: {type: Boolean, default: true, required: [true, 'The state is required']}
}); 

gameSchema.methods.toJSON = function() { //(toJSON) NODE AUTOMATIC FUNCTION : the endpoint always return object json whitout the password and state
    var obj = this.toObject();
    delete obj.state;
    return obj;
}


placeSchema.plugin(uniqueValidator,{message: '[PHAT] must be unique'}); 

module.exports = mongoose.model('Places', placeSchema);