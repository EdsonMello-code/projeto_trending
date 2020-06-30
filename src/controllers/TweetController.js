const connection = require('../config/database')
const newDate = require('../utils/newDate')

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
      image: req.file.filename,
      user_id: id,
      created_at: newDate()
    })

    return res.json({ tweet: text})
  }
}