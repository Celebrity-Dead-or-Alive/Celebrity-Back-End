
exports.up = function(knex) {
  return knex.schema.createTable('celebs', tbl => {
      tbl.increments()
      tbl.string('name', 100)
      tbl.string('info', 300)
      tbl.integer('birth')
      tbl.integer('death')
      tbl.string('image_url', 1000)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('celebs')
};
