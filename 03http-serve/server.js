var http = require('http')
// var fs = require('fs')
// var url = require('url')
var router=require('./router')

var serve = http.createServer()
serve.listen(8888, function () {
    console.log('http://localhost:8888/')
})
serve.on('request', function (req, res) {
    router(req, res)
    //console.log(req.method)
    //get请求参数获取
    //http://localhost:8888/user?id=888
    // console.log(url.parse(req.url, true).query.id)

    // if (req.method === 'GET') {
    //     if (req.url == '/') {
    //         fs.readFile('./index.html', 'utf-8', function (err, data) {
    //             res.write(data)
    //             res.end()
    //         })
    //     } else {
    //         fs.readFile('wukong.jpeg', function (err, data) {
    //             res.end(data)
    //         })
    //     }
    // } else if (req.method === 'POST') {
    //     //POST请求参数处理
    //     // console.log(req)
    //     var data = ''
    //     req.on('data', function (re) {//多次传输
    //         data += re
    //     })
    //     req.on('end', function (re) {//最后结果
    //         var postdata = require('querystring').parse(data)
    //         console.log(postdata)
    //     })
    //     res.end()
    // }

})