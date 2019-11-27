const {Router} = require('express'),
      router = Router(); 
      
router.route('/game')
    
    .get((req, res) => {
        res.json({msg: 'Route game get'})
    })

    .post((req,res) => {
        res.json({msg: 'Route game post'})
    })

    .put((req,res) => {
        res.json({msg: 'Route game update'})
    })

    .delete((req,res) => {
        res.json({msg: 'Route game delete'})
    })

module.exports = router;

