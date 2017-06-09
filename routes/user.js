const routes = require('express').Router();
const sequelize = require("sequelize");
const db = require('../models')


routes.get('/', (req,res) =>{
  db.User.findAll()
  .then(data =>{
    res.render('user',{key: data});
  })
  .catch(err => {
    console.log(err);
  })
  
})

routes.post('/create', (req,res) =>{
  // let username = req.body.username
  // let email = req.body.email
  
  db.User.create(req.body)
  .then((data) =>{
    res.redirect('/user')
  })
  .catch((err) => {
    console.log(err.message);
    res.redirect('/')
  })
})

routes.get('/edit/:id', (req,res) =>{
  let id = req.params.id
  
  db.User.findOne({
    where:{id : id}
  })  
  .then((data) =>{
    // console.log(data.id);
    res.render('edit',{edit_data : data})
  })
  .catch((err)=>{
    console.log(err);
  })
})

routes.post('/edit/:id', (req,res) =>{
  let id = req.params.id 
  let username = req.body.username
  let email = req.body.email
  
  db.User.update({ 
    username: username,
    email: email},{ where: {id:id} })
  .then(()=>{
    res.redirect('/user')
  })
  .catch((err)=>{
    console.log(err);
  })
})

routes.get('/delete/:id', (req,res) => {
  let id = req.params.id
  
  db.User.destroy({ where: {id:id} })
  .then(() =>{
    res.redirect('/user')
  })
  .catch((err)=>{
    console.log(err);
  })
})

module.exports = routes;