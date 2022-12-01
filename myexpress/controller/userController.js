//user业务逻辑
const { User } = require('../model/index')
//用户注册逻辑
exports.register = async (req, res, next) => {
    const userModel = new User(req.body)//添加数据库数据
    const dbBack = await userModel.save()
    const user = dbBack.toJSON()//返回JSON数据规范
    res.status(201).json({ user })
    // res.send('registerddddd')
}
//登录逻辑
//1、数据验证
//2、链接数据库查询
//3、token
exports.login = async (req, res) => {
    console.log('dddddddddd',req.body)
    
    var dbBack=await User.findOne(req.body)
    // console.log('dddddddddd',req.method)
    const user = dbBack.toJSON()//返回JSON数据规范
    res.status(200).json({ user })

}

exports.list = async (req, res) => {
    console.log(req.method)
    res.send('user')
}
exports.delet = async (req, res) => {
    console.log(req.method)
    res.send('delete')
}
