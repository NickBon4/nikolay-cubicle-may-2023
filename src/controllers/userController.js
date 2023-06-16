const router = require('express').Router()

const userManager = require('../managers/userManager')

router.get('/register', (req, res) => {
    res.render('users/register')
})

router.post('/register', async (req, res) => {
    const {username, password, repeatPassword} = req.body

    const user = await userManager.register({username, password, repeatPassword})

    console.log(user);

    res.redirect('/users/login')
})

router.get('/login', (req, res) => {
    res.render('users/login')
})

router.post('/login', async (req, res) => {
    const {username, password} = req.body

    await userManager.login(username, password)

    res.redirect('/')
})

module.exports = router