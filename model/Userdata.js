const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userId : {
        type: String
    },
    password :{
        type: String
    }
})


const User = mongoose.model('userData',userSchema)

module.exports = User