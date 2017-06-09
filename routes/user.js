
var express = require('express')
var router = express.Router()
var db = require('../models')
// halaman user

router.get('/', function (req,res) {
  db.User.findAll({order : [['id','ASC']]})
  .then(_users => {
    res.render('user', {users : _users})
  })
})

router.get('/create', function (req,res) {
  res.render('create')
})

router.post('/create/', function(req,res) {
  let body = req.body
  db.User.create({username:body.username, email:body.email})
  .then(() => {
    res.redirect('/user')
  })
})

// halaman edit
router.get('/edit/:id', function(req,res) {
  let id = req.params.id
  db.User.findOne({where : {id : id}})
  .then(_user => {
    res.render('edit',{user: _user})
  })
})
router.post('/edit/:id', function(req,res) {
  let _id = req.params.id
  let _username = req.body.username
  let _email = req.body.email
  db.User.update(
    {
    username: _username,
    email: _email
  },
    {where : {id : _id}}
  )
  .then( () => {
    res.redirect('/user')
  })
  .catch(err => {
    console.log(err);
  })
})

//
router.get('/delete/:id', function (req,res) {
  let _id = req.params.id
  db.User.destroy({where : {id : _id}})
  .then( () => {
    res.redirect('/user')
  })
})


module.exports = router