const connection = require('../config/database')

module.exports = {
  async index(req, res) {
    const data = await connection('users').select('*')

    return res.json(data)
  },

  async create(req, res) {
    const { user } = req.body

    await connection('users').insert({
      user
    })

    return res.json('feito')
  }
}
