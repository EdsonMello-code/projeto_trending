const knex = require('../database/index')
module.exports = {
  async index (request, response, next) {
    try {
      const users = await knex('users')
      return response.json(users)
    } catch (error) {
      next(error)
    }
  },

  async create (request, response, next) {
    const { username } = request.body
    if (!username) {
      return response.status(400).json({ error: 'Username invalid' })
    }
    try {
      await knex('users').insert({ username })

      return response.status(201).send()
    } catch (error) {
      next(error)
    }
  }

}
