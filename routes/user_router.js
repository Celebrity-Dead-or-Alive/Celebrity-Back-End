const express = require('express')
const router = express.Router()
const jsonWT = require('jsonwebtoken')

const helpers = require('../helpers/user_helpers.js')

router.get('/', async (req, res) => {

    try {
        const users = await helpers.get()

        res.status(200).json(users)
    } catch {
        res.status(500).json({message: 'Something went wrong with the server'})
    }
})

router.put('/', async (req, res) => {

})

router.delete('/', async (req, res) => {
    
})

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