'use strict'

const express = require('express');
const db = require('../models');
const bodyParser = require('body-parser');

let parseUrlEncoded = bodyParser.urlencoded({extended: false});
let router = express.Router();

router.get('/user', function (req, res){
  db.User.findAll()
    .then(function (_users){
      console.log('berhasil');
      res.render('layout', {users: _users})
    })
    
})

router.get('/add', function (req, res){
  res.render('form', {pesan: 'input', action: '/user'})
})

router.post('/user', parseUrlEncoded, function (req, res){
  let getDataForm = {
    userName: req.body.username,
    emailUser: req.body.email
  };
  db.User.create({
    username: getDataForm.userName,
    email: getDataForm.emailUser,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(function (_users){
    res.render('success', {hasil: getDataForm.userName, pesan: 'insert data '})
  })
})

router.get('/delete/:id', function (req, res){
  let id = req.params.id;
  db.User.destroy({
    where:{
      id: id
    }
  })
  .then(function(){
    console.log('hapus data berhasil');
    res.redirect('/user');
  })
})

router.get('/user/edit/:id', function(req, res){
  let id = req.params.id;
  // console.log(id);
  res.render('form', {pesan: 'update data ', action: '/user/edit/' + id})
});

router.post('/user/edit/:id', parseUrlEncoded, function(req, res){
  let getDataForm = {
    userName: req.body.username,
    emailUser: req.body.email 
  }
  db.User.update({
    username: getDataForm.userName,
    email: getDataForm.emailUser
  },{
    where: {
      id: req.params.id
    }
  })
  .then(function (_users){
    res.render('success', {hasil: getDataForm.userName, pesan: 'update '})
  })
})

module.exports = router ; 
