const express = require('express');
let app = express.Router()

app.get('/', (req, res) => {
  res.render('home')
})


module.exports = app;