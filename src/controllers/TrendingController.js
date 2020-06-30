const connection = require('../config/database')
const trending = require('../utils/trending')

module.exports = {
  async index(req, res) {
    const data = await connection('tweets').select('*')
    const topTrending = trending(data)

    return res.json(topTrending)
  },

  async show(req, res) {
    const { topic } = req.params
    console.log(topic)

    const tweetsTopic = connection('tweets').select('*')

    return res.json(tweetsTopic)
  }
}