const express = require('express')
const routeruser = express.Router()
const userController = require('../controller/userController')

const validator = require('../middlevare/validator/userValidator')

const {verifyToken}=require('../util/jwt')//token鉴权

routeruser.post('/registers', validator.register, userController.register)
    .post('/logins', validator.login, userController.login)
    .get('/lists',verifyToken, userController.list)



// routeruser.get('/list',(req,res)=>{
//     console.log(req.method)
//     res.send('video')
// }).get('/userss',(req,res)=>{
//     console.log(req.method)
//     res.send('userss')
// })

module.exports = routeruser