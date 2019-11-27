const Team = require('../models/team.model'),
      _ = require('underscore');

exports.get = async (req, res) => {
    try {
        const teams = await Team.find()
        res.json({
            state: 'true',
            teams
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
        const team = await Team.findById(req.params.id)
        res.json({
            state: 'true',
            team
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
        const team = new Team(req.body);
        await team.save()
        res.json({
            state: 'true',
            team
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
        const team = _.pick(req.body, ['name']);
        const new_team = await Team.findByIdAndUpdate(req.params.id, team, {new: true});
        if(!new_team){
            res.json({
                state: 'false',
                message: "Team not found" 
            })
        } else {
            res.json({
                state: 'true',
                team: new_team
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
        const teamRemove = await Team.findByIdAndDelete(req.params.id)
        if(!teamRemove){
            res.json({
                state: 'false',
                message: "Team not found" 
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