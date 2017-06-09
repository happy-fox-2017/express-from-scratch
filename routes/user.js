const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const db = require("../models");


router.get('/', function(req,res){
  db.User.findAll()
  .then(_users => {
    res.render("user", {users : _users});
  })
  .catch(err => {
    console.log(err);
  })
  
})

router.post('/', (req,res)=>{
  let newUser = req.body
  db.User.create({
    username : newUser.username,
    email    : newUser.email,
    updatedAt : new Date(),
    createdAt : new Date()
  })
  .then(() =>{
    res.redirect("/user");
  })
})

router.get('/edit/:id', (req,res) =>{
  let editData = req.params.id;
  db.User.findOne({ 
    where: {id: editData} 
  })
  .then(_users => {
   res.render("UserEdit", {users : _users});
  })
})

router.post('/edit/:id',(req,res) =>{
  let updateUser = req.body;
  let id = req.params.id
  db.User.update({
    username : updateUser.username,
    email : updateUser.email
  },{
    where : {id : id}
  })
  .then(() =>{
    res.redirect("/user");
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/delete/:id',(req,res) =>{
  let id = req.params.id;
  db.User.destroy({
    where : {id:id}
  })
  .then(() =>{
    res.redirect("/user");
  })
  .catch(err => {
    console.log(err);
  })
})

module.exports=router