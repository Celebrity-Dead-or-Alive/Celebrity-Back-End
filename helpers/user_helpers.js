const db = require('../data/dbConfig.js')

module.exports = {
    get,
    getUser
}

function get() {
    return db('users')
}

function getUser(username) {
    return db('users')
        .where({username})
        .first();
}
