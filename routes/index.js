const routes = require('express').Router();
const db = require('../models')

routes.get('/', function(req, res){
  res.render('index', {title: 'ExpressJS !'})
})
module.exports = routes;