const User = require('../models/user.model'),
      Game = require('../models/game.model'),
      _ = require('underscore');

exports.get = async (req, res) => {
    try {
        const users = await User.find({state: true});
        res.json({
            status: 'true',
            users
        });
    } catch (error) {
        res.json({
            status: 'false',
            error
        });
    }
}

exports.getOne = async (req, res) => {
    try {
        const user = await User.findOne({_id: req.params.id, state: true});
        if(!user){
            res.json({
                status: 'false',
                message: 'User not found'
            });
        } else {
            res.json({
                status: 'true',
                user
            });
        }
    } catch (error) {
        res.json({
            status: 'false',
            message: error
        });
    }
}

exports.create = async (req, res) => {
    try {
        const user = new User(req.body); 
        await user.save();
        res.json({
            state: 'true',
            user
        })     
    } catch (error) {
        res.json({
            state: 'false',
            message: error
        })
    }
}

exports.update = async (req, res) => {
    try {
        const data = _.pick(req.body,['username','email','password'])
        const new_user = await User.findOneAndUpdate({_id: req.params.id, state: true}, data, {new: true})
        if(!new_user){ // user not found
            res.json({
                state: 'false',
                message: "User not found" 
            })
        } else {
            res.json({
                state: 'true',
                team: new_user
            })        
        }
    } catch (error) {
        res.json({
            state: 'false',
            message: error
        })
    }
}

exports.delete = async (req, res) => {
        try {
            const user_deleted = await User.findOneAndUpdate({_id: req.params.id, state: true}, {state: 'false'}, {new: true}); 
            console.log(user_deleted);
            if(!user_deleted){
                res.json({
                    state: 'false',
                    message: 'User not found'
                })            
            } else {
                res.json({
                    state: 'true',
                    user: user_deleted
                }) 
            }
        } catch (error) {
            res.json({
                state: 'false',
                message: error
            })            
        }
}

exports.getGames = async (req, res) => {
    try {
       
        const user = await User.findOne({_id:req.params.id, state:true});
        if(!user){ //if user is in state false
            res.json({
                status: 'false', 
                message: 'User not found'
            })
        }else{
            const games = await Game.find({$or:[{local: user._id}, {visitant: user._id}], state:true}) //search all user matches as local or visitant
                                    .populate([{path: 'local', model: User}, {path: 'visitant', model: User}])
                                    .exec();        
            
            if(_.isEmpty(games)){ // if has not matches
                res.json({
                    status:'false',
                    message: "This user has not matches"
                })
            }else {
                res.json({
                    status:'true',
                    games
                })
            }
        }
    
    } catch (error) {
    
        res.json({
            status: 'false',
            message: error
        });
    
    }
}

exports.getDifference = async (req, res) => {
    try {
        const user = await User.findOne({_id: req.params.id, state: true});
        if(!user){ //if user is in state false
            res.json({
                status: 'false', 
                message: 'User not found'
            })
        }else{
            const opponent = await User.findOne({_id: req.params.id_opponent, state: true});
            if(!opponent){ //if opponent is in state false
                res.json({
                    status: 'false', 
                    message: 'opponent not found'
                })
            }else{
                const games = await Game.find( {$and : [ { $or : [ {local: user._id}, {visitant: user._id} ] },
                                                         { $or : [ {local: opponent._id}, {visitant: opponent._id} ] } ] 
                                                       , state: true });

                if(_.isEmpty(games)){ // if has not matches
                    res.json({
                        status:'false',
                        message: "No matches"
                    })
                }else {

                    let win = 0, lose = 0, tied = 0, goals = 0, goals_against = 0;
                        
                    games.forEach(game => {
                        
                        if(game.goals_local > game.goals_visitant){ // win
                          
                            if(String(game.local) == user._id){
                                win++; 
                                goals = goals + game.goals_local;
                                goals_against = goals_against + game.goals_visitant;
                            }else{
                                lose++;
                                goals = goals + game.goals_local;
                                goals_against = goals_against + game.goals_visitant;
                            }
                        
                        }else if(game.goals_local < game.goals_visitant){ // lose
                          
                            if(String(game.local) == user._id){
                                lose++; 
                                goals = goals + game.goals_local;
                                goals_against = goals_against + game.goals_visitant;
                            }else{
                                win++;
                                goals = goals + game.goals_local;
                                goals_against = goals_against + game.goals_visitant;
                            }
                       
                        }else { //tied
                            tied++;
                            goals = goals + game.goals;
                            goals_against = goals_against + game.goals_visitant;
                        }
                        
                    })                                    

                    res.json({ 
                        status: 'true',
                        win, lose, tied, goals, goals_against })
                }

            }    
            
        }

    } catch (error) {
        res.json({
            status: 'false',
            message: error
        })
    }
}