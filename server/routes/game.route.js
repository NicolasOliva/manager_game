const {Router} = require('express'),
      gameController = require('../controllers/game.controller'),  
      router = Router(); 
      
    
//get all      
router.get('/game', gameController.get)

//get one
router.get('/game/:id', gameController.getOne)

//create
router.post('/game', gameController.create)

//modification
router.put('/game/:id', gameController.update)

//delete
router.delete('/game/:id', gameController.delete)

module.exports = router;

