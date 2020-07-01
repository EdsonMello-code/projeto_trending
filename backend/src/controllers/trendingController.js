const knex = require('../database')

module.exports = {
  async index (request, response, next) {
    try {
      const trends = await knex('trending')

      return response.json(trends)
    } catch (error) {
      next(error)
    }
  },

  async create (request, response, next) {
    const { trending } = request.body
    if (!trending) {
      return response.status(400).json({ error: 'Trend invalid' })
    }
    try {
      await knex('trending').insert({ trending })

      return response.status(201).send()
    } catch (error) {
      next(error)
    }
  }
}
