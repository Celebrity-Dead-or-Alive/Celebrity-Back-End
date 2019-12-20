const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const helpers = require('../helpers/auth_helpers.js')

const { generateToken } = require('./middleware.js') 



router.post('/login', async (req, res) => {
    let { username, password } = req.body
    
    if(!username || !password || username.length === 0 || password.length === 0) {
        res.status(400).json({ message: 'Please fill out the required fields!' })
    } else {
        try {
            const login = await helpers.findBy(username)
            console.log(login)
            
    
            if(login && bcrypt.compareSync(password, login.password)) {
                const token = generateToken(login)
                res.status(200).json({ message: `Logged In! Your ID is ${login.id}`, token })
            } else {
                res.status(401).json({ message: "Please provide correct credentials!" })
            }
        } catch {
            res.status(500).json({message: 'Something went wrong with the server!'})
        }
    }
})

module.exports = router