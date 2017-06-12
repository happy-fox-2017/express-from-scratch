'use strict'

const express = require('express');

let router = express.Router();

router.get('/', (req, res) => { //path from url
  res.render('index');
});

module.exports = router;
