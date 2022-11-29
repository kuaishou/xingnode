//模块化
var http = require('http')
var fs = require('fs')
module.exports = {
    index(res) {
        fs.readFile('./index.html', 'utf-8', function (err, data) {
            res.write(data)
            res.end()
        })
    },
    user(postdata,res) {
        // fs.readFile('./index.html', 'utf-8', function (err, data) {
        //     res.write(data)
        //     res.end()
        // })
    },
}