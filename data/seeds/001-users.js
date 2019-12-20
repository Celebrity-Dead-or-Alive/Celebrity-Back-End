
const bcrypt = require('bcryptjs')
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          firstName: "Elan",
          lastName: "Riznis",
          username: "elanriznis13",
          password: bcrypt.hashSync('pass', 4),
          email: "elan@gmail.com"
        },
        {
          id: 2,
          firstName: "Mark",
          lastName: "Stahl",
          username: "markstahl",
          password: bcrypt.hashSync('pass', 4),
          email: "mark@gmail.com"
        },
        {
          id: 3,
          firstName: "Alexis",
          lastName: "Hill",
          username: "alexishill",
          password: bcrypt.hashSync('pass', 4),
          email: "alexis@gmail.com"
        },
        {
          id: 4,
          firstName: "Kenneth",
          lastName: "Brandon",
          username: "ekennethbrandon",
          password: bcrypt.hashSync('pass', 4),
          email: "kenneth@gmail.com"
        },
        {
          id: 5,
          firstName: "Toosdai",
          lastName: "Otte",
          username: "toosdaiotte",
          password: bcrypt.hashSync('pass', 4),
          email: "toosdai@gmail.com"
        },
        {
          id: 6,
          firstName: "Marc",
          lastName: "Torre",
          username: "marctorre",
          password: bcrypt.hashSync('pass', 4),
          email: "marc@gmail.com"
        }
      ]);
    });
};
