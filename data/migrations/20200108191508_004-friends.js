
exports.up = function(knex) {
  return knex.schema.createTable('friends', tbl => {
      tbl.increments()
      tbl.integer('current_user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable()
      tbl.integer('friend_user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable()
      tbl.boolean('requestPending')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('friends')
};