const express = require('express');
let app = express.Router()
const db = require('../models')


app.get('/', (req, res) => {
  db.User.findAll({order:[['id', 'ASC']]})
  .then((_users) => {
    res.render('allUser', {users: _users})
  })
})

app.get('/create', (req, res) => {
  res.render('create-user')
})

app.post('/create', (req, res) => {
  let columnsName = req.body
  db.User.create({
    username: columnsName.username,
    email: columnsName.email
  })
  .then(() => {
    res.redirect('/users')
  })
})

app.get('/edit/:id', (req, res) => {
  let _id = req.params.id
  db.User.findById(_id)
  .then((_user) => {
    res.render('editUser', {user: _user})
  })
})

app.post('/edit/:id', (req, res) => {
  let _id = req.params.id
  let columnsName = req.body
  db.User.update({
    username: columnsName.username,
    email: columnsName.email
  }, {
    where: { id:_id }
  })
  .then(() => {
    res.redirect('/users')
  })
})

app.get('/delete/:id', (req, res) => {
  let _id = req.params.id
  db.User.findById(_id)
  .then((user) => {
    return user.destroy()
  })
  .then(() => {
    res.redirect('/users')
  })
})


module.exports = app;