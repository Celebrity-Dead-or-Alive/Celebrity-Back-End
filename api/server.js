const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')

const userRotuer = require('../routes/user_router.js')
const authRouter = require('../routes/auth_router.js')
const celebRouter = require('../routes/celebs_router.js')

server.use(express.json())
server.use(helmet())
server.use(cors())


server.get('/', (req, res) => {
    res.send(
        `<h1>Welcome to Celebs game app!</h1>`
    )
})


server.use('/api/users', userRotuer)
server.use('/api/auth', authRouter)
server.use('/api/celebs', celebRouter)

module.exports = server