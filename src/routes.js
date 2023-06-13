const router = require('express').Router();

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const acessoryController = require('./controllers/acessoryController')

router.use(homeController);
router.use('/cubes', cubeController);
router.use('/acessories', acessoryController)
router.get('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router;