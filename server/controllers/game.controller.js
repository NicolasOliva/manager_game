const Game = require('../models/game.model'),
      _ = require('underscore');

      
exports.get = async (req, res) => { 
    try {
        const games = await Game.find({state: true})
        res.json({
            state: 'true',
            games
        })    
    } catch (error) {
        res.json({
            state: 'false',
            error
        })        
    }
}

exports.getOne = async (req, res) => {
    try {
        const game = await Game.findById({_id: req.params.id, state: true})
        res.json({
            state: 'true',
            game
        })
    } catch (error) {
        res.json({
            state: 'false',
            error
        })
    }
}

exports.create = async (req, res) => {
    try {
        const game = new Game(req.body);
        await game.save();
        res.json({
            state: 'true',
            game
        })
    } catch (error) {
        res.json({
            state: 'false',
            error
        })        
    }
}

exports.update = async (req, res) => {
    try {
        const game = _.pick(req.body, ['local','visitant', 'goals_local', 'goals_visitant', 'place']); //it allow not modificate other fields (state for example)
        const new_game = await Game.findByIdAndUpdate({_id: req.params.id, state: true}, game, {new: true});
        if(!new_game){
            res.json({
                state: 'false',
                message: "Game not found" 
            })
        } else {
            res.json({
                state: 'true',
                game: new_game
            })        
        }
    } catch (error) {
        res.json({
            state: 'false',
            error
        })
    }
}

exports.delete = async (req, res) => {
    try {
        const game_removed = await Game.findByIdAndUpdate({_id: req.params.id, state: true}, {state: 'false'}, {new: true})
        if(!game_removed){
            res.json({
                state: 'false',
                message: "Game not found" 
            })
        } else {
            res.json({
                state: 'true',
                message: 'Successfully remove'
            })        
        }
    } catch (error) {
        res.json({
            state: 'false',
            error
        })
    }
}