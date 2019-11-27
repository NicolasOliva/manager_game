const {Router} = require('express'),
      teamController = require('../controllers/team.controller'),    
      router = Router(); 

//get all      
router.get('/team', teamController.get)

//get one
router.get('/team/:id', teamController.getOne)

//create
router.post('/team', teamController.create)

//modification
router.put('/team/:id', teamController.update)

//delete
router.delete('/team/:id', teamController.delete)

module.exports = router;

