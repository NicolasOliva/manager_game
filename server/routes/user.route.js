const {Router} = require('express'),
      userController = require('../controllers/user.controller'),
      router = Router(); 
      
router.get('/user', userController.get)

router.get('/user/:id', userController.getOne)

router.post('/user', userController.create)

router.put('/user/:id', userController.update)

router.delete('/user/:id', userController.delete)

module.exports = router;

