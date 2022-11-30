const express = require('express')
const router = express.Router()
const routerVideo = express.Router()
router.get('/video',(req,res)=>{
    console.log(req.method)
    res.send('video')
})

module.exports = routerVideo