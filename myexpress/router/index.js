const express = require('express')

const router = express.Router()
router.get('/',(req,res)=>{
    console.log(req.method)
    res.send('index')
})
router.get('/usersss',(req,res)=>{
    console.log(req.method)
    res.send('usersss')
})

module.exports = router