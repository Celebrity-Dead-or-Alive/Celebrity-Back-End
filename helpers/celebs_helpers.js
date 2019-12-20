const db = require('../data/dbConfig.js')

module.exports = {
    getTwenty
}


function getTwenty() {
    return db('celebs')
    .then(celebs => {
        let count = celebs.length, temp, index;
        while (count > 0) {
        index = Math.floor(Math.random() * count);
        count--;
        temp = celebs[count];
        celebs[count] = celebs[index];
        celebs[index] = temp;
    }
    return celebs.slice(0, 20);

    })
}