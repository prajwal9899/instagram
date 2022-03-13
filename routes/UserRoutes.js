const express = require('express')
const routes = express.Router()
const User = require('../model/Userdata')


routes.get('/', (req,res) => {
    res.send('hello')
})

routes.get('/login' ,(req,res) => {
    res.render('layout.ejs')
})

routes.post('/login', (req,res) => {
    const user = new User({
        userId : req.body.userId,
        password : req.body.password
    })

    user.save((err,result) => {
        if (err) {
            console.log(err);
        }else {
            console.log(result);
        }
    })

    res.redirect('/login')
})

module.exports =  routes 