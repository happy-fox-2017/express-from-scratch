
var express = require('express')
var router = express.Router()

router.use(function timeLog(req,res,next) {
  console.log(`Time : ${Date.now()}`);
  next()
})

router.get('/', function (req,res) {
  res.redirect('/user/create')
})



module.exports = router