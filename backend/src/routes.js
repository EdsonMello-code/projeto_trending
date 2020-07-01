const { Router } = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')

const UserController = require('./controllers/UserController')
const TweetController = require('./controllers/TweetController')
const TrendingController = require('./controllers/TrendingController')

const routes = Router()
const upload = multer(multerConfig)

routes.get('/users', UserController.index).post('/user', UserController.create)

routes
  .get('/tweets', TweetController.index)
  .post(
    '/tweet/:id',
    upload.single('image'),
    TweetController.create
  )

routes.get('/trending', TrendingController.index)
routes.get('/trending/:topic', TrendingController.show)

module.exports = routes
