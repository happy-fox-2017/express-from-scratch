const express = require('express');
let route = express.Router()

route.get('/', function (req, res) {
  //res.send('index with ---- response send ---- bukan dengan --response render--')
  res.render('index');

})

module.exports = route;