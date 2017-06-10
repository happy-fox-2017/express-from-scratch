const router = require('express').Router();

router.get('/', function(req, res) {
  res.render('index', {});
});

router.get('/user', function(req, res) {
  res.render('user', {
    users: [{username: 'hello', email: 'xxx'}],
  });
});

router.post('/user', function(req, res) {
  res.send('User post form');
});

router.get('/user/edit/:id', function(req, res) {
  res.send('User edit page');
});

router.post('/user/edit/:id', function(req, res) {
  res.send('User edit form');
});

router.get('/user/delete/:id', function(req, res) {
  res.send('User delete');
});

module.exports = router;
