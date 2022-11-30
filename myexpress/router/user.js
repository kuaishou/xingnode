const express = require('express')
const routeruser = express.Router()
const userController=require('../controller/userController')
routeruser.post('/register',userController.register)
.get('/delete',userController.delet)



// routeruser.get('/list',(req,res)=>{
//     console.log(req.method)
//     res.send('video')
// }).get('/userss',(req,res)=>{
//     console.log(req.method)
//     res.send('userss')
// })

module.exports = routeruser