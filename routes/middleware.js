const jsonWT = require('jsonwebtoken')
const secret = require('../config/secrets.js')

function generateToken(user) {
    const payload = {
        id: user.id,
        email: user.email,
        username: user.username
    }

    const options = {
        expiresIn: '1d'
    }

    return jsonWT.sign(payload, secret.jwtSecret, options)
}

function restricted(req, res, next) {
    const token = req.headers.authorization

    if(token) {
        jsonWT.verify(token, secret.jwtSecret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({ message: 'Invalid Token' })
            } else {
                req.decJWT = decodedToken

                next()
            }
        })
    } else {
        res.status(401).json({ message: 'Please provide a token in the "headers"!' })
    }
}


module.exports = {
    restricted,
    generateToken
}