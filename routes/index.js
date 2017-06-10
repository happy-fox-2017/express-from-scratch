const router = require('express').Router();

router.get('/', function(req, res) {
  res.send('I Love Hactiv8!');
});

module.exports = router;
