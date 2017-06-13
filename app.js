// const express = require ('express'); //const app = require ('express')()
// const app = express() //const app = require ('express')()
// const homepage = require('./routes/index');
// const userPage = require('./routes/user')
// // const userPage = require('./routes/user.js')
// const bodyParser = require('body-parser')
// const sequelize = require('sequelize')
// const ejs = require('ejs')
// 
// // connect all routes 
// app.use('/',homepage); //const routes = require('./routes');
// app.use('/', userPage)
// app.use(bodyParser.urlencoded({extended:true}));
// // app.set('view engine', 'ejs')
// 
// app.listen(3000, (req, res) => {
//   console.log('Server running on port 3000');
// })

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
  console.log('Express started')
})
