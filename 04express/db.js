const fs = require('fs')
const { promisify } = require('util')
const readFile = promisify(fs.readFile)//封装成promise异步async await
const writeFile = promisify(fs.writeFile)//封装成promise异步async await

exports.getDB = async () => {
    let data = await readFile('./DB.json', 'utf-8')
    return JSON.parse(data)
}

exports.setDB = async (data) => {
    let stringdata = JSON.stringify(data)
    return await writeFile('./DB.json', stringdata)
}