const koa = require('koa')
const {koaBody} = require('koa-body')
const router = require('./router')
const cors = require("@koa/cors")

const app = new koa()
app.use(cors())
app.use(koaBody())
app.use(router.routes())
app.on('error', (err, ctx) => {
    console.log(err)
    ctx.body = err
})

app.listen(3333, () => {
    console.log('kao启动成功 http://127.0.0.1:3333')
})