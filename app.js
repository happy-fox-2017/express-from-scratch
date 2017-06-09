const express = require('express');
let app = express()

const route = require('./routes/index')

app.use('/', route)

app.listen(3000, function () {
  console.log('Server STARTED on port 3000!');
})