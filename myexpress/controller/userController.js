//user业务逻辑
const { User } = require('../model/index')
const { createToken } = require('../util/jwt')
const { promisify } = require('util')
const fs = require('fs')
const rename = promisify(fs.rename)

//用户注册逻辑
exports.register = async (req, res, next) => {
    const userModel = new User(req.body) //添加数据库数据
    const dbBack = await userModel.save()
    const user = dbBack.toJSON() //返回JSON数据规范
    delete user.password //不把密码返回给前端
    res.status(201).json({
        user
    })
    // res.send('registerddddd')
}
//登录逻辑
//1、数据验证
//2、链接数据库查询
//3、token
exports.login = async (req, res) => {
    console.log('dddddddddd', req.body)

    var dbBack = await User.findOne(req.body)
    if (!dbBack) {
        res.status(402).json({
            error: "邮箱或者密码不正确"
        })
    }
    // dbBack.token =  jwt.sign(dbBack, '0f6f51f7-f0a5-43a9-a4b5-6a1736fd5f8e')//第二个参数秘钥使用vscode安装UUID插件
    dbBack = dbBack.toJSON() //返回JSON数据规范
    dbBack.token = await createToken(dbBack)
    res.status(200).json({
        dbBack
    })
}
//修改用户update
exports.update = async (req, res) => {
    let id = req.user.userinfo._id //修改数据的id
    const dbBack = await User.findByIdAndUpdate(id, req.body, {
        new: true
    })
    res.status(200).json({
        user: dbBack.toJSON() //返回JSON数据规范
    })
    // console.log(updateData)
    // res.send(req.body)
}

//用户头像上传
exports.headimg = async (req, res) => {
    // {
    //     fieldname: 'headimg',
    //     originalname: 'logo.png',
    //     encoding: '7bit',
    //     mimetype: 'image/png',
    //     destination: 'public/',
    //     filename: '4c0d679856d9e79705dc7d4f173e3db7',
    //     path: 'public\\4c0d679856d9e79705dc7d4f173e3db7',
    //     size: 335466
    //   }
    let fileArr = req.file.originalname.split('.')
    let filetype = fileArr[fileArr.length - 1]

    try {
        await rename('./public/' + req.file.filename, './public/' + req.file.filename + '.' + filetype)//修改文件名
        res.status(201).json({
            filepath: req.file.filename + '.' + filetype
        })
    } catch (error) {
        res.status(500).json({
            err: error
        })
    }
}
exports.list = async (req, res) => {
    console.log(req.method)
    res.send('user')
}

exports.delet = async (req, res) => {
    console.log(req.method)
    res.send('delete')
}