const express = require('express');
const app = express();
const ejs = require("ejs");
const index = require('./routes/user');
const bodyParser = require("body-parser");


app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/user',index);

app.listen(3000, () =>{
  console.log("Server Running");
})