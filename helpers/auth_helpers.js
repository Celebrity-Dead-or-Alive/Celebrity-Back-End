
const db = require('../data/dbConfig.js')

module.exports = {
    findBy,
    register
}

function findBy(username) {
    console.log(username)
    return db('users')
    .where({ username })
    .first()
}

function register(user) {
    return db('users')
    .where({username: user.username})
    .first()
    .then(returnedUser => {
        if(returnedUser) {
            return 'username_exists'
        } else {
            return db('users')
            .where({email: user.email})
            .first()
            .then(secondReturn => {
                if(secondReturn) {
                    return 'email_exists'
                } else {
                    return db('users')
                    .insert(user)
                }
            })
        }
    })
}