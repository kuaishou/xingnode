//user业务逻辑
const { User } = require('../model/index')
const { createToken } = require('../util/jwt')
//用户注册逻辑
exports.register = async (req, res, next) => {
    const userModel = new User(req.body)//添加数据库数据
    const dbBack = await userModel.save()
    const user = dbBack.toJSON()//返回JSON数据规范
    delete user.password//不把密码返回给前端
    res.status(201).json({ user })
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
        res.status(402).json({ error: "邮箱或者密码不正确" })
    }

    // dbBack.token =  jwt.sign(dbBack, '0f6f51f7-f0a5-43a9-a4b5-6a1736fd5f8e')//第二个参数秘钥使用vscode安装UUID插件
    dbBack = dbBack.toJSON()//返回JSON数据规范
    dbBack.token = await createToken(dbBack)
    res.status(200).json({ dbBack })

}

exports.list = async (req, res) => {
    console.log(req.method)
    res.send('user')
}
exports.delet = async (req, res) => {
    console.log(req.method)
    res.send('delete')
}
