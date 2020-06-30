exports.up = function(knex) {
  return knex.schema.createTable('tweets', table => {
    table.increments('id').primary().notNullable()
    table.string('text').notNullable()
    table.string('created_at').notNullable()
    table.string('image')

    table.integer('user_id').notNullable()
    table.foreign('user_id').references('id').inTable('users')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('tweets')
}
