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

app.put('/:id', async (req, res) => {//id占位符传参数
    //req.params.id可以获取到参数
    try {
        let usersinfo = await db.getDB()
        let userid = req.params.id - 0
        const putuser = usersinfo.users.find((item) => {
            return item.id === userid
        })

        if (!putuser) {
            res.status(403).json({
                error: "修改的用户不纯在"
            })
        }

        const body = req.body
        putuser.username = body.username ? body.username : putuser.username
        putuser.age = body.age ? body.age : putuser.age
        usersinfo.users[userid - 1] = putuser

        if (!await db.setDB(usersinfo)) {
            res.status(201).send({ msg: '修改成功' })
        } else {
            res.status(500).json({
                error: '修改失败'
            })
        }

    } catch (error) {
        res.status(500).json({
            error: '修改失败ddd'
        })
    }
})

app.listen(8888, () => {
    console.log('http://127.0.0.1:8888')
})