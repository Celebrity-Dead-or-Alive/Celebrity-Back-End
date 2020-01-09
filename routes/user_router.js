const express = require('express')
const router = express.Router()
const jsonWT = require('jsonwebtoken')
const { restricted } = require('./middleware.js') 

const helpers = require('../helpers/user_helpers.js')

router.get('/', restricted, async (req, res) => {
    const { id } = req.decJWT

    try {
        if(id) {
            const users = await helpers.get()

            res.status(200).json(users)            
        } else {
            res.status(401).json({message: 'Must be logged in to view users'})
        }

    } catch {
        res.status(500).json({message: 'Something went wrong with the server'})
    }
})

router.get('/loggedin', restricted, async (req, res) => {
    let { username } = req.decJWT;
    const token = req.headers.authorization;
    console.log(req.decJWT);

    try {
        if(token){
        const user = await helpers.getUser(username)

        res.status(200).json(user)             
        } else {
            res.status(400).json({message: 'User not logged in'})
        }
           

    } catch {
        res.status(500).json({message: 'Something went wrong with the server'})
    }
})

router.put('/loggedin', restricted, async (req, res) => {
    let username = req.decJWT.username;
    let changes = req.body;

    try {
        if(username){
            const user = await helpers.getUser(username)
                   
            if(user){
                const updatedUser = await helpers.updateUser(changes, user)
                res.json({message: "Successfully updated user", updatedUser}) 
                console.log(updatedUser)               
            } 
        } else {
            res.status(400).json({message: 'User does not exist'})
        }
    } catch {
        res.status(500).json({message: 'Something went wrong with the server'})
    }
})

// router.delete('/', async (req, res) => {
    
// })

module.exports = router

//testing
// intergrate endpoint for user that is logged in
// edit and delete user endpoints
// create scores migration
// GET endpoint for scores (global - all users, single users score)
    // take query strings in url to sort all users scores (highest/lowest/etc)
    // take query string in url to limit all users scores shown 

// add date played to scores table

// POST endpoint for scores