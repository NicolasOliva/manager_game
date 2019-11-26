const {Router} = require('express'),
      router = Router();
      
router.use(require('./place.route'));
router.use(require('./user.route'));
router.use(require('./game.route'));
router.use(require('./team.route'));

router.route('/')

    .get((req,res) => {
        res.json({
            message: 'Hi!'
        })
    })


module.exports = router;