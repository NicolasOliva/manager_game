const {Router} = require('express'),
      placeController = require('../controllers/place.controller'),
      router = Router(); 
      
//get all      
router.get('/place', placeController.get)

//get one
router.get('/place/:id', placeController.getOne)

//create
router.post('/place', placeController.create)

//modification
router.put('/place/:id', placeController.update)

//delete
router.delete('/place/:id', placeController.delete)


module.exports = router;

