const { Router } = require('express')
const userController = require('./controllers/userController')
const trendingController = require('./controllers/trendingController')

const routes = Router()

routes
  // users
  .get('/users', userController.index)
  .post('/users', userController.create)
  // trends
  .get('/trends', trendingController.index)
  .post('/trends', trendingController.create)

module.exports = routes
