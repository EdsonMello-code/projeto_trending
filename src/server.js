const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())

app.use(routes)

// catch all
app.use((error, request, response, next) => {
  response.status(error.status || 500)
  response.json({ error: error.message })
})

// not found
app.use((request, response, next) => {
  const error = new Error('not found')
  error.status = 404
  next(error)
})

const port = 3333

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
