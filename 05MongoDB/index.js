const { MongoClient } = require('mongodb')
const client = new MongoClient('mongodb://127.0.0.1:27017')

const clientFun = async (c) => {//链接数据库
    await client.connect()//链接数据库
    const db = client.db('mytest')//选择库
    return db.collection(c)//选择集合
}
const main = async () => {
    // await client.connect()//链接数据库
    // const db=client.db('mytest')//选择库
    // const cc=db.collection('cc')//选择集合
    // const sss= await cc.find()//获取数据
    // console.log(await sss.toArray())//转化数据


    const cc = await clientFun('cc')
    //增加
    // // let insd = await cc.insertOne({ username: '李白', age: 18 })//插入一条
    // let insd = await cc.insertMany([{ username: '李白显示', age: 18 },{ username: '杜甫', age: 28 }])//插入多条
    // console.log(insd)

    //查询
    // var fff=await cc.find({age:{$gt:15}})//年龄大于15的查询
    // console.log(await fff.toArray())

    //更新
    // var newup = await cc.updateOne({ age: { $gt: 15 }},{ $set: { username: '王伟' } })//修改一条
    // var newup = await cc.updateMany({ age: { $gt: 15 }},{ $set: { username: '王伟' } })//修改多条
    // console.log(newup)

    //删除
    // var newup = await cc.deleteOne({ age: { $gt: 15 }})//删除一条
    var newup = await cc.deleteMany({ age: { $gt: 20 }})//删除多条
    console.log(newup)


}
main().finally(() => client.close())