
exports.up = knex => knex.schema.createTable('trending', table => {
  table.increments('id')
  table.text('trending')

  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.timestamp('update_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable()
