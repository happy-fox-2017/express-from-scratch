'use strict'

const routes = require('express').Router();

// routes.get('/', (req, res) => {
//   res.json({message: 'nyambung'});
// })

routes.get('/', (req, res) => {
  res.send('halaman ke 2');
})

module.exports = routes;