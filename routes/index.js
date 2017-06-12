'use strict'

const route = require('express').Router();
// const db = require('../models');


// routes.get('/', (req, res) => {
//   res.send('halaman ke 2');
// })

route.get('/', (req,res) => {
  res.render('index');
});

module.exports = route;