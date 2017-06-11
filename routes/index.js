'use strict'

const express = require('express');

let router = express.Router();

router.get('/', (req, res) => { //path from url
  res.send('index');
});

module.exports = router;
