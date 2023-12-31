const jwt = require('../lib/jwt')
const {secret} = require('../config/config')

exports.auth = async (req, res, next) => {
    const token = req.cookies['auth']

    if(token){
        try {
            const decodedToken = await jwt.verify(token, secret)

            req.user = decodedToken
            res.locals.user = decodedToken
            res.locals.isAuth = true
            
            next()
        } catch (error) {
            res.clearCookie('auth')
            res.redirect('/users/login')
        }
    }else{
        next()

    }

}

exports.isAuthenticated = (req, res, next) => {
    if(!req.user){
        return res.redirect('/users/login')
    }
    next()

}