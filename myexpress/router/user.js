const express = require('express')
const routeruser = express.Router()
const userController = require('../controller/userController')

const validator = require('../middlevare/validator/userValidator')

const {verifyToken}=require('../util/jwt')//token鉴权中间件
const multer=require('multer')//文件上传插件 

const upload= multer({dest: 'public/'})
routeruser.post('/registers', validator.register, userController.register)
    .post('/logins', validator.login, userController.login)
    .get('/lists',verifyToken, userController.list)
    .put('/',verifyToken, validator.update,userController.update)//修改用户信息
    .post('/headimg',verifyToken,upload.single('headimg'),userController.headimg)//修改用户信息



// routeruser.get('/list',(req,res)=>{
//     console.log(req.method)
//     res.send('video')
// }).get('/userss',(req,res)=>{
//     console.log(req.method)
//     res.send('userss')
// })

module.exports = routeruser