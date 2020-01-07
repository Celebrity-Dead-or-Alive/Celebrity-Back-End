require('dotenv').config()
knex = require('knex')
const knexConfig = require('../knexfile.js')
const branch = process.env.BRANCH
const db = knex(knexConfig[branch])

module.exports = db