const {Router} = require('express'),
      router = Router(); 
      
router.route('/team')
    
    .get((req, res) => {
        res.json({msg: 'Route team get'})
    })

    .post((req,res) => {
        res.json({msg: 'Route team post'})
    })

    .update((req,res) => {
        res.json({msg: 'Route team update'})
    })

    .delete((req,res) => {
        res.json({msg: 'Route team delete'})
    })

module.exports = router;

