const express= require('express')
const router= express.Router();
const db= require('../models');

router.get('/', (req, res)=> {
  db.User.findAll({})
  .then((users)=> {
    res.render('user', { 
      users: users
    })
  })
})

router.post('/create', (req, res)=> {
  db.User.create({
    username: req.body.username,
    email: req.body.email
  })
  .then(()=> {
    res.redirect('/user')
  })
})

router.get('/create', (req,res)=> {
  res.render('create')
})

router.get('/edit/:id', (req, res)=> {
  db.User.find({
    where: {
      id: req.params.id
    }
  })
  .then((users)=> {
    res.render('edit', {
      users: users
    })
  })
})

router.post('/edit/:id', (req, res)=> {
  db.User.find({
    where: {
      id: req.params.id
    }
  })
  .then((users)=> {
    if (users) {
      users.updateAttributes({
        username: req.body.username,
        email: req.body.email
      })
      .then((todo)=> {
        res.redirect('/user')
      })
    }
  })
})

router.get('/delete/:id', (res, req)=> {
  db.User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(()=> {
    res.redirect('/user')
  })
})

module.exports = router;