const db = require('../data/dbConfig.js')

module.exports = {
    getTwenty
}


function getTwenty() {
    return db('celebs')
    .then(celebs => {
        let ctr = celebs.length, temp, index;
        // While there are elements in the array
        while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = celebs[ctr];
        celebs[ctr] = celebs[index];
        celebs[index] = temp;
    }
    return celebs.slice(0, 20);

    })
}