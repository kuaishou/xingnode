const koa=require('koa')
const context = require('koa/lib/context')
const app=new koa()

app.use(async ctx=>{
    ctx.body='hell Koa'
})

app.listen(3333,()=>{
    console.log('kao启动成功 http://127.0.0.1:3333')
})