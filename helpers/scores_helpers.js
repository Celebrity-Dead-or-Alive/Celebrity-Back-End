const db = require('../data/dbConfig.js')

function getScores(){
    return db('scores')
}

function getUsersScore(id) {
    return db('scores')
        .where({user_id: id})
        .first()
}

function addScore(score) {
    return db('scores')
        .insert(score)
        .then(id => {
            return getUsersScore(id)
        })
}

module.exports = {
    getScores,
    getUsersScore,
    addScore
}