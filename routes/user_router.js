const express = require('express')
const router = express.Router()
const jsonWT = require('jsonwebtoken')

const helpers = require('../helpers/user_helpers.js')

router.get('/all', async (req, res) => {

    try {
        const users = await helpers.get()

        res.status(200).json(users)
    } catch {
        res.status(500).json({message: 'Something went wrong with the server'})
    }
})

module.exports = router

//testing