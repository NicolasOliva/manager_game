const {Router} = require('express'),
      router = Router(); 
      
router.route('/user')
    
    .get((req, res) => {
        res.json({msg: 'Route user get'})
    })

    .post((req,res) => {
        res.json({msg: 'Route user post'})
    })

    .update((req,res) => {
        res.json({msg: 'Route user update'})
    })

    .delete((req,res) => {
        res.json({msg: 'Route user delete'})
    })

module.exports = router;

