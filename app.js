const express = require('express')
let app = express()
const rindex = require('./routes/index.js')
const ruser = require('./routes/user.js')
const bodyParser = require('body-parser')

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', rindex);
app.use('/user', ruser);

app.listen(3000, ()=> {
  console.log(`starting....`)
});

// app.get ('/', function (request, response) { 
// 	response.send("I love hacktiv8!")
// })
// app.listen(3000)
