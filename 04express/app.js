const express = require('express')
const fs = require('fs')
const { promisify } = require('util')
const db = require('./db')
const readFile = promisify(fs.readFile)//封装成promise异步async await
const writeFile = promisify(fs.writeFile)//封装成promise异步async await
const app = express()
app.use(express.urlencoded())//post传输数据格式处理 'content-type': 'application/x-www-form-urlencoded',
app.use(express.json())//post传输数据格式处理json
app.get('/', async function (req, res) {//get请求
    // readFile('./DB1.json', 'utf-8', (err, data) => {
    //     if (!err) {
    //         let back = JSON.parse(data)
    //         res.send(back.users)
    //         res.end()
    //     } else {
    //         res.status(500).json({ err })
    //     }
    // })

    try {
        // let back = await readFile('./DB.json', 'utf-8')
        // back = JSON.parse(back)
        let back = await db.getDB()
        res.send(back.users)
        res.end()
    } catch (err) {
        res.status(500).json({ err })
    }

})
app.post('/', async (req, res) => {
    // console.log(req.headers)
    // console.log(req.body)
    let body = req.body
    if (!body) {
        res.status(403).json({
            error: '缺少用户数据信息'
        })
    }
    let back = await readFile('./DB.json', 'utf-8')
    back = JSON.parse(back)
    console.log(back)
    body.id = back.users[back.users.length - 1].id + 1
    back.users.push(body)

    try {
        let suss = await writeFile('./DB.json', JSON.stringify(back))
        if (!suss) {
            res.status(200).send({ msg: '添加成功' })
        }
    } catch (err) {
        res.status(500).json({
            error: '缺少用户数据信息'
        })
    }
})

app.listen(8888, () => {
    console.log('http://127.0.0.1:8888')
})