
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('trending').del()
    .then(() => {
      // Inserts seed entries
      return knex('trending').insert([
        { trending: 'livro tal' }
      ])
    })
}
