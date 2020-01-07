
const celebs = require('../../celebs.js')
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('celebs').del()
    .then(function () {
      // Inserts seed entries
      return knex('celebs').insert(celebs.slice(0, 160));
    });
};
