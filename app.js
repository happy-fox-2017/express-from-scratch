'use strict'

const express = require('express'); 
let app = express(); // instance of express
let index = require('./routes/index'); //routes for index 
let user = require('./routes/user'); //routes for user 

app.set('view engine', 'ejs'); //embeed ejs command 
app.use('/', index);
app.use('/', user);

app.listen(3000, function (){
  console.log('Express running....');
})
