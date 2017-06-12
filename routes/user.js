const express = require('express')
const db = require('../models/')

let router = express.Router();

router.get('/', (req, res, next) => {
  db.User.findAll()
  .then(users => {
    res.render('user', {data: users});
  })
  .catch(err => {
    console.log(err)
  })
})

router.get('/create', (req, res, next) => {
  res.render('user-create')
})

router.post('/create', (req, res, next) => {
  let id = req.body.id
  let username = req.body.username
  let email = req.body.email
  db.User.create(req.body)
  .then((user) => {
    res.redirect('/user')
  })
  .catch(err => {
    console.log(err)
  })
})

router.get('/edit/:id', (req, res, next) => {
  let id = req.params.id
  db.User.findById(id)
  .then(user => {
    res.render('user-edit', {'user': user})
  })
})

router.post('/edit/:id', (req, res, next) => {
  let id = req.params.id
  let username = req.body.username
  let email = req.body.email
  db.User.findById(id)
  .then(user => {
    user.update(req.body)
    .then(user => {
      res.redirect('/user')
    })
  })
})

router.get('/delete/:id', (req, res, next) => {
  let id = req.params.id
  db.User.destroy({
    where: {
      'id': id
    }
  })
  .then(() => {
    res.redirect('/user')
  })
})

module.exports = router;