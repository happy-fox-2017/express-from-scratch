
var express = require('express')
var router = express.Router()

// halaman user
router.get('/', function (req,res) {
  res.send('Halaman get user')
})
router.post('/', function (req,res) {
  res.send('halaman post user')
})

// halaman edit
router.get('/edit/:id', function(req,res) {
  let id = req.params.id
  res.send(`halaman edit user ${id}` )
})
router.post('/edit/:id', function(req,res) {
  let id = req.params.id
  res.send(`halaman post user ${id}`)
})

//
router.get('/delete/:id', function (req,res) {
  let id = req.params.id
  res.send(`halaman delete user`)
})


module.exports = router