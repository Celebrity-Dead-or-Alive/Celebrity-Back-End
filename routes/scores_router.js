const express = require('express')
const router = express.Router()
const { restricted } = require('./middleware.js') 

const helpers = require('../helpers/scores_helpers.js')

router.get('/', async (req, res) => {

    try {
        const scores = await helpers.getScores()

        res.status(200).json(scores)
    } catch {
        res.status(500).json({message: 'Something went wrong with the server'})
    }
})

router.get('/userScore', restricted, async (req, res) => {
    const { id } = req.decJWT;
    const token = req.headers.authorization;
    console.log(id)
    try {
        if(token) {
            const userScore = await helpers.getUsersScore(id)  
            res.status(200).json(userScore)          
        } else {
            res.status(400).json({message: 'User not logged in'})
        }

    } catch {
        res.status(500).json({message: 'Something went wrong with the server'})
    }

})

router.post('/userScore', restricted, async (req, res) => {
    const { id } = req.decJWT;
    const score = req.body;
    score.user_id = id
    try {

        if(id) {
            const addedScore = await helpers.addScore(score, id)
            res.status(201).json(addedScore)
        } else {
            res.status(404).json({message: 'Login user to add score'})
        }

    } catch {
        res.status(500).json({message: 'Something went wrong with the server'})
    }
})

module.exports = router;

// create friends table migrations with foreign keys



// create scores migration
// GET endpoint for scores (global - all users, single users score)
    // take query strings in url to sort all users scores (highest/lowest/etc)
    // take query string in url to limit all users scores shown 

// add date played to scores table

// POST endpoint for scores