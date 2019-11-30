const Place = require('../models/place.model'),
      _ = require('underscore');

      
exports.get = async (req, res) => {
    try {
        const places = await Place.find({state: true})
        res.json({
            state: 'true',
            places
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
        const place = await Place.findOne({_id: req.params.id, state: true})
        if(!place){
            res.json({
                state: 'false',
                place: 'Place not found'
            })
        } else {
            res.json({
                state: 'true',
                place
            })
        }
    } catch (error) {
        res.json({
            state: 'false',
            error
        })
    }
}

exports.create = async (req, res) => {
    try {
        const place = new Place(req.body);
        await place.save()
        res.json({
            state: 'true',
            place
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
        const place = _.pick(req.body, ['name']);
        const new_place = await Place.findOneAndUpdate({_id: req.params.id, state: true}, place, {new: true});
        if(!new_place){
            res.json({
                state: 'false',
                message: "place not found" 
            })
        } else {
            res.json({
                state: 'true',
                place: new_place
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
        const placeRemove = await Place.findOneAndUpdate({_id: req.params.id, state: true}, {state: 'false'}, {new: true})
        if(!placeRemove){
            res.json({
                state: 'false',
                message: "place not found" 
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
