
exports.up = function(knex) {
    return knex.schema.createTable('scores', tbl => {
        tbl.increments()
        tbl.integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            .notNullable()
        tbl.integer('total')
            .notNullable()
        tbl.integer('correctAnswer')
            .notNullable()
        tbl.integer('wrongAnswer')
            .notNullable()
        tbl.time('time')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('scores')  
};
