const express = require('express')
const routeruser = express.Router()
const userController = require('../controller/userController')

const validator = require('../middlevare/validator/userValidator')


routeruser.post('/registers', validator.register, userController.register)
    .post('/logins', validator.login, userController.login)
    .get('/deletes', userController.delet)



// routeruser.get('/list',(req,res)=>{
//     console.log(req.method)
//     res.send('video')
// }).get('/userss',(req,res)=>{
//     console.log(req.method)
//     res.send('userss')
// })

module.exports = routeruser