const {Router} = require('express'),
      router = Router(); 
      
router.route('/place')
    
    .get((req, res) => {
        res.json({msg: 'Route place get'})
    })

    .post((req,res) => {
        res.json({msg: 'Route place post'})
    })

    .put((req,res) => {
        res.json({msg: 'Route place update'})
    })

    .delete((req,res) => {
        res.json({msg: 'Route place delete'})
    })

module.exports = router;

