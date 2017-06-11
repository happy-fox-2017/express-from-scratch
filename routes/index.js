const router = require('express').Router();
const models = require('../models');

router.get('/', function (req, res) {
  res.render('index', {});
});

router.get('/user', function (req, res) {
  models.User.findAll()
  .then((users) => {
    res.render('user', { users });
  });
});

router.get('/user/add', function (req, res) {
  res.render('user_add', {});
});

router.post('/user/add', function (req, res) {
  models.User.create({
    username: req.body.username,
    email: req.body.email,
  })
  .then(() => {
    res.redirect('/user');
  });

});

router.get('/user/edit/:id', function (req, res) {
  models.User.findOne({ where: { id: req.params.id } })
  .then((user) => {
    res.render('user_edit', { user });
  });
});

router.post('/user/edit/:id', function (req, res) {
  models.User.update({
    username: req.body.username,
    email: req.body.email,
  },
    { where: { id: req.params.id } })
  .then(() => {
    res.redirect('/user');
  });
});

router.get('/user/delete/:id', function (req, res) {
  models.User.destroy({ where: { id: req.params.id } })
  .then(() => {
    res.redirect('/user');
  });
});

module.exports = router;
