const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const helpers = require('../helpers/auth_helpers.js')

const { generateToken } = require('./middleware.js') 



router.post('/register', async (req, res) => {
    const {firstName, lastName, username, password, email} = req.body
    req.body.password = bcrypt.hashSync(password, 4)

    if(!firstName || !lastName || !username || !password || !email || firstName.length === 0 || lastName.length === 0 || username.length === 0 || password.length === 0 || email.length === 0) {
        res.status(400).json({ message: 'Please fill out all the required fields!' })
    } else {
        try {
            const register = await helpers.register(req.body)
            if(register === 'username_exists') {
                res.status(400).json({message: 'This username already exists'})
            } else if(register === 'email_exists') {
                res.status(400).json({message: 'This email already exists!'})
            } else {
                res.status(201).json('Successfully Registered!')
            }
            
        } catch {
            res.status(500).json({ message: 'Something went wrong with the server' })
        }
    }
})


//Login User
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