const {Router} = require('express'),
      userController = require('../controllers/user.controller'),
      router = Router(); 
      
//get all      
router.get('/user', userController.get)

//get one 
router.get('/user/:id', userController.getOne)

//create
router.post('/user', userController.create)

//update
router.put('/user/:id', userController.update)

//delete
router.delete('/user/:id', userController.delete)

//all user games
router.get('/user/:id/games', userController.getGames)

//difference whit other user
router.get('/user/:id/difference/:id_opponent', userController.getDifference)

module.exports = router;

