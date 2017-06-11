const express = require('express');
const index = require('./routes/index');
const users = require('./routes/user')
const bodyParser  = require('body-parser')
let app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use('/', index)
app.use('/users', users)
app.set('view engine', 'ejs')
// app.use('/',)

app.listen(3000, (req,res) => {
  console.log('LH 3000 listening..');
})

