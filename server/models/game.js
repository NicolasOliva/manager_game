const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator');

// date
const d = new Date(),
      min = d.getMinutes();
if(min < 10){min = '0' + min;}
const date = `${d.getDate()}/${(d.getMonth() +1)}/${d.getFullYear()}  ${d.getHours()}:${min} hs.`;

const gameSchema = mongoose.Schema({
    date: {type: Date, default: date},
    local: {type: Schema.Types.ObjectId, ref: 'User', unique: true, required: [true, 'The user is necessary']},
    visitant: {type: Schema.Types.ObjectId, ref: 'User', unique: true, required: [true, 'The user is necessary']},
    goals_local: {type: Number, required: [true, 'The goals is necessary']},
    goals_visitant: {type: Number, required: [true, 'The goals is necessary']},
    state: {Type: Boolean, default: true, required: [true, 'The state is required']}
});

gameSchema.plugion(uniqueValidator, '{PHAT} must be unique');

module.exports = mongoose.model('Teams', gameSchema);