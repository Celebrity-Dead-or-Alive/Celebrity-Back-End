const express = require('express')
const router = express.Router()


const helpers = require('../helpers/celebs_helpers.js')

router.get('/', async (req, res) => {
    try {
        const celebs = await helpers.getTwenty()

        res.status(200).json(celebs)
    } catch {
        res.status(500).json({ message: 'Something went wrong with the server!'})
    }
})

module.exports = router