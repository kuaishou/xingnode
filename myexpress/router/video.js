const express = require('express')
const routerVideo = express.Router()
const videoController=require('../controller/videoController')

routerVideo.get('/user',videoController.list)


// routerVideo.get('/video',(req,res)=>{
//     console.log(req.method)
//     res.send('video')
// }).get('/user',(req,res)=>{
//     console.log(req.method)
//     res.send('user')
// })

module.exports = routerVideo