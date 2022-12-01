//JWT身份认证鉴权
const jwt = require('jsonwebtoken')
const { UUID } = require('../config/config.default')
const { promisify } = require('util')
const tojwt = promisify(jwt.sign)
const verify = promisify(jwt.verify)
//生成token和解析token

//1、生成token
module.exports.createToken = async userinfo => {
    //第二个参数秘钥使用vscode安装UUID插件
    return await tojwt({ userinfo }, UUID, { expiresIn: 60 * 60 * 24 })//token24小时

}


//1、解析token;所有接口要使用就写成中间价形式；请求的header里面带有token
module.exports.verifyToken = async (req, res, next) => {
    let token = req.headers.authorization
    token = token ? token.split('Bearer ')[1] : null

    if (!token) {
        res.status(402).json({ error: "请传入token" })
        return
    }
    //验证token
    try {
        let userinfo = await verify(token, UUID)
        next()
    } catch (error) {
        res.status(402).json({ error: "token无效" })
    }
}






// let token=jwt.sign({foo:'hello'},'555')

// console.log(token)


// let jets= jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJoZWxsbyIsImlhdCI6MTY2OTkwNjk1NH0.uQAWUbaLIxHoIeOazVcJDUt4JYUmhipay0F9YKbJu9M','555')
// console.log(jets)
