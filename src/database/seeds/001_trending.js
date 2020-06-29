
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        { username: 'edson' }
      ])
    })
}
