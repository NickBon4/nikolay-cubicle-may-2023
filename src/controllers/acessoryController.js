
const router = require('express').Router()

router.get('/create', (req, res) => {
    res.render('acessory/create')
})

module.exports = router