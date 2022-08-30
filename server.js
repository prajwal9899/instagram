const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routes = require('./routes/UserRoutes')
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const path = require('path')
dotenv.config()

// database connection
mongoose.connect('mongodb+srv://admin:admin@cluster0.zotay.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('Database connected successfully');
}).catch((err) => {
    console.log(err);
})

// set view engine
app.use(expressLayout)
app.set('views', path.join(__dirname, 'resources/views'))
app.set('view engine', 'ejs')

// assets
app.use(express.static('public'))

// to accept json data
app.use(express.json())

// to accept url encoded data
app.use(express.urlencoded({ extended: false }))


app.use(routes)


app.listen(PORT, () => {
    console.log(`Listening on the port ${PORT}`);
})
