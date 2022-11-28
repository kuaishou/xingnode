//1、导入http模块
const http = require('http')
const fs = require('fs')

//2、创建服务器
//获取到服务器实例对象
const server = http.createServer()
//监听端口
server.listen(8080, () => {
    console.log('http://127.0.0.1:8080')
})

//接收请求事件
server.on('request', function (req, res) {//请求对象；相应对象
    // console.log('6666')
    // res.setHeader('Content-type', 'text/html;charset=utf-8')//返回html标签
    // res.write('<h1>小伙子你好啊</h1>')//返回参数
    // res.end()//断开http链接


    /**返回html文件 */
    fs.readFile('./index.html', 'utf-8', (err, data) => {
        console.log(data)
        res.write(data)//返回参数
        res.end()//断开http链接
    })


})



