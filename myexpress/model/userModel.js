const mongoose = require('mongoose')
const baseModel = require('./baseModel')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        select: false //查询不再返回结果中返回密码
    },
    phone: {
        type: String,
        require: true
    },
    image: {
        type: String,
        default: null
    },
    cover:{
        type:String,
        default:null
    },
    channeldes:{
        type:String,
        default:null
    },
    ...baseModel

})

module.exports = userSchema