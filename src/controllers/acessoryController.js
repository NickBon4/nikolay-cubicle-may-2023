
const router = require('express').Router()

router.get('/create', (req, res) => {
    res.render('acessory/create')
})

router.post('/create', (req, res) => {
    const body = req.body

    console.log(body);
    //TODO: add accessory data to db

    res.redirect('/')
})

module.exports = router