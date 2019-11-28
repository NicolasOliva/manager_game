const User = require('../models/user.model'),
      _ = require('underscore');

exports.get = async (req, res) => {
    const users = await User.find({state: true});
    res.json({
        status: 'true',
        users
    });
}

exports.getOne = async (req, res) => {
    try {
        const user = await User.findById({_id: req.params.id, state: true});
        if(!user){
            res.json({
                status: 'true',
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
        const new_user = await User.findByIdAndUpdate({_id: req.params.id, state: true}, data, {new: true})
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
                    state: 'true',
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