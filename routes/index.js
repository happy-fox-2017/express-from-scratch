const route = require('express').Router()

route.get('/', function (req, res) {
  res.send('I am legend!')
})

module.exports = route;