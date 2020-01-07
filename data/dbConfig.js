require('dotenv').config()
knex = require('knex')
const knexConfig = require('../knexfile.js')
const branch = process.env.BRANCH || 'development'
const db = knex(knexConfig[branch])

module.exports = db