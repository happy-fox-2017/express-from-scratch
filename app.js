"use strict"

const express = require("express");
const ejs = require('ejs');
const app = express();
const index = require('./routes/index');
const user = require('./routes/user');
const path = require('path')
const bodyParser = require('body-parser')

app.set('views','./views');
app.set('view engine','ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', index);
app.use('/user', user);

app.listen(3000);