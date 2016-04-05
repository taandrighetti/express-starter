'use strict';

const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan('tiny'))

let messages = [];

app.get('/', (req, res) => {
  // Send JSON
  res.send({ messages: messages })
})

// POST localhost:3000?m=hola
app.post('/', (req, res) => {
  messages.push(req.query.m);
  res.send();
});

module.exports = app
