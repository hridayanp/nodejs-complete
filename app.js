const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorRoutes = require('./routes/404')

const app = express()

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes)
app.use(shopRoutes)
app.use(errorRoutes)

app.listen(3000)