"use strict"
const express = require('express')
const bodyParser = require('body-parser')

const index = require('./routes')
const user = require('./routes/user')

var app = express()

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./public'))

app.use('/', index)
app.use('/user', user)

app.listen(3000, () => {
  console.log('Server 3000 is running')
})