const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const homepage = require('./routes')
const userPage = require('./routes/user.js')

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/',homepage)
app.use('/user',userPage)


app.listen(3000, function () {
  console.log(`listening....`);
})