const mongoose = require('mongoose')
const userSchema = require('./userModel')
//数据库链接

async function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/rexpress-video')
}
main().then(res => {
    console.log('数据库链接成功')
}).catch(e => {
    console.log('数据库链接失败')
})

module.exports = {//模块化
    User: mongoose.model('Userdb', userSchema)
}

// const user = new mongoose.Schema({
//     username: {
//         type: String,
//         require: true
//     },
//     age: {
//         type: Number,
//         require: true
//     }
// })

// const userModel = mongoose.model('User', user)
// const u = new userModel({
//     username: '李四',
//     age: 16
// })

// u.save()
