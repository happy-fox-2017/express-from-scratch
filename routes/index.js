const routes = require('express').Router();

routes.get('/', (req,res) =>{
  res.send('i love hacktiv8')
})




module.exports = routes;