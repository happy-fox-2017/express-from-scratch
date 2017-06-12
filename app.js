'use strict'

const express = require('express');
let app = express()

const index = require('./routes/index')
const user = require('./routes/user')


app.set('view engine', 'ejs');
app.use('/index', index);
app.use('/user', user);


app.listen(3000);
console.log('Listening...')

// app.get('/',(req,res)=>{
//   res.send('--I love Hacktiv8--')
// })
