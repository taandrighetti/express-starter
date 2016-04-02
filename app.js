const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  // Send JSON
  res.send({ status: 'on' })
})

module.exports = app
