const connection = require('../config/database')

module.exports = {
  async index(req,res) {
    const data = await connection('tweets').select('*')

    return res.json(data)
  },

  async create(req,res) {
    const { id } = req.params
    const { text } = req.body

    await connection('tweets').insert({
      text,
      user_id: id
    })

    return res.json({ tweet: text})
  }
}