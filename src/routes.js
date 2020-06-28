const { Router } = require('express')
const userController = require('./controllers/userController')

const routes = Router()

routes
  .get('/users', userController.index)
  .post('/users', userController.create)

module.exports = routes
