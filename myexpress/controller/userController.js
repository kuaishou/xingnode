//user业务逻辑

const { User } = require('../model/index')

const {body,validationResult} =require('express-validator')

exports.register = async (req, res,next) => {
    console.log('fffffff', req.body)
    const errors=validationResult(req)
    console.log(errors)
    const userModel = new User(req.body)//添加数据库数据
    const dbBack = await userModel.save()
    res.status(201).json(dbBack)
    // res.send('registerddddd')
}


exports.list = async (req, res) => {
    console.log(req.method)
    res.send('user')
}
exports.delet = async (req, res) => {
    console.log(req.method)
    res.send('delete')
}
