
exports.up = function(knex) {
 return knex.schema.createTable('users', tbl => {
     tbl.increments()
     tbl.string('firstName', 100).notNullable()
     tbl.string('lastName', 100).notNullable()
     tbl.string('username', 20).notNullable().unique()
     tbl.string('password', 100).notNullable()
     tbl.string('email', 40).notNullable().unique()
 })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
