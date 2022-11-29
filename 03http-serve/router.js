var fs = require('fs')
var url = require('url')
var controller=require('./controller')

module.exports = (req, res) => {
    if (req.method === 'GET') {
        if (req.url == '/') {
            controller.index(req)
        } else {
            fs.readFile('wukong.jpeg', function (err, data) {
                res.end(data)
            })
        }
    } else if (req.method === 'POST') {
        //POST请求参数处理
        // console.log(req)
        var data = ''
        req.on('data', function (re) {//多次传输
            data += re
        })
        req.on('end', function (re) {//最后结果
            var postdata = require('querystring').parse(data)
            console.log(postdata)
        })
        res.end()
    }
}