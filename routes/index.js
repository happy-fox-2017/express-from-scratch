const router = require('express').Router();

router.get('/', function(req, res) {
  res.render('index', {});
});

router.get('/user', function(req, res) {
  res.render('user', {
    users: [{id: 1, username: 'hello', email: 'xxx'}],
  });
});

router.get('/user/add', function(req, res) {
  res.render('user_add', {});
});

router.post('/user/add', function(req, res) {
  console.log(req.body);
  res.redirect('/user');
});

router.get('/user/edit/:id', function(req, res) {
  const user = {username: 'hello'};
  res.render('user_edit', {user});
});

router.post('/user/edit/:id', function(req, res) {
  console.log(req.body);
  res.redirect('/user');
});

router.get('/user/delete/:id', function(req, res) {
  console.log(req.params.id);
  res.redirect('/user');
});

module.exports = router;
