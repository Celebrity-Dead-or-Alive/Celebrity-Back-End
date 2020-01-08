const db = require('../data/dbConfig.js')

module.exports = {
    get,
    getUser,
    getUserById,
    updateUser
}

function get() {
    return db('users')
}

function getUser(username) {
    return db('users')
        .where({username})
        .first();
}

function getUserById(id) {
    return db('users')
        .where({id})
        .first();
}

function updateUser(changes, username) {
    return db('users')
        .where({username})
        .update(changes)
        .then(username => {
            return getUser(username)
        })
}
