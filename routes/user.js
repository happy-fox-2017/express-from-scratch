const route = require('express').Router();
const bodyParser = require('body-parser');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./user.db')

let parsingUrlEncoded = bodyParser.urlencoded({extended:false});

route.get('/user', function(req, res) {
  db.users.findAll()
  .then( (_Users) => {
    console.log('Success!');
    res.render('layout', { User : _Users})
  })
  .catch( (err) => {
    console.log("Error : " + err.message);
  })
  console.log('\nGetting user...');
});

route.get('/add', (req, res) => {
  res.render('form', { message: 'Insert', action: "/user"});
});

route.post('/user', parsingUrlEncoded, (req, res) => {
  let response = {
    Username: req.body.username,
    Email: req.body.email
  };
  
  db.users.create({
    username: response.Username,
    email: response.Email,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then( (_Users) => {
    console.log('\nInsert data success!');
    res.render('success', { result: response.Username, message: 'Insert data'});
  })
  .catch( (err) => {
    console.log("Error : " + err.message);
  });
});

route.get('/delete/:id', (req, res) => {
  let id = req.params.id;
  db.users.destroy({
    where: {
      id: id
    }
  })
  .then( () => {
    console.log('\nDelete record success!');
    res.redirect('/user');
  })
  .catch( (err) => {
    console.log(err.message);
  });
});

route.get('/user/edit/:id', (req,res) => {
  let_id = req.params.id;
  console.log(_id);
  res.render('form', {message: 'Update', action: '/user/edit + id'});
});

route.post('/user/edit/:id', parsingUrlEncoded, (req, res) => {
  let response = {
    Username: req.body.username,
    Email: req.body.email
  };
  
  db.users.update({
    username: response.Username,
    email: response.Email,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    where: {
      id: req.params.id
    }
  })
  .then(Users => {
    console.log('\nUpdate data success!');
    res.render('success', {result: response.Username, message: 'Update data'});
  })
  .catch(err => {
    console.log("Error : " + err.message);
  });
});

module.exports = route;