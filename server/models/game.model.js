const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator');

// date
const d = new Date(),
      min = d.getMinutes();
if(min < 10){min == '0' + min;}
const date = `${d.getDate()}/${(d.getMonth() +1)}/${d.getFullYear()}  ${d.getHours()}:${min} hs.`;

const gameSchema = mongoose.Schema({
    date: {type: String, default: date},
    local: {type: mongoose.Schema.Types.ObjectId, ref: 'users', required: [true, 'The user is necessary']},
    visitant: {type: mongoose.Schema.Types.ObjectId, ref: 'users', required: [true, 'The user is necessary']},
    team_local: {type: mongoose.Schema.Types.ObjectId, ref: 'teams', required: [true, 'The team is necessary']},
    team_visitant: {type: mongoose.Schema.Types.ObjectId, ref: 'teams', required: [true, 'The team is necessary']},
    goals_local: {type: Number, required: [true, 'The goals is necessary']},
    goals_visitant: {type: Number, required: [true, 'The goals is necessary']},
    place: {type: mongoose.Schema.Types.ObjectId, ref: 'places', required: [true, 'The place is necessary']}, //the games will belong to a place
    state: {type: Boolean, default: true, required: [true, 'The state is required']}
});

gameSchema.methods.toJSON = function() { //(toJSON) NODE AUTOMATIC FUNCTION : the endpoint always return object json whitout the state
    var obj = this.toObject();
    delete obj.state;
    return obj;
}

gameSchema.plugin(uniqueValidator, '{PHAT} must be unique');

module.exports = mongoose.model('Games', gameSchema);