exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary().notNullable()
    table.string('user').notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users')
}
