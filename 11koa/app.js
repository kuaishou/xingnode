const koa = require('koa');
// const router = require('@koa/router');
// const routers = new router();
const routers = require('./router/index')
const { koaBody } = require('koa-body');
const app = new koa();

app.use(koaBody())


app.on('error',(err,ctx)=>{
    console.log(err)
    ctx.body=err

})

// 一、下面执行洋葱模型结果
// one-1
// two-1
// three-1
// three-2
// two-2
// one-2
// app.use(async (ctx,next)=>{
//     console.log('one-1')
//     next()
//     console.log('one-2')
// })

// app.use(async (ctx,next)=>{
//     console.log('two-1')
//     next()
//     console.log('two-2')
// })
// app.use(async (ctx,next)=>{
//     console.log('three-1')
//     console.log('three-2')
// })


//二、路由处理
// app.use(async (ctx, next) => {
//     console.log(ctx.path)
// })
// routers.get('/user', (ctx, next) => {
//     ctx.body = 'hello koarouter get'

// })
app.use(routers.routes())

app.listen(3333, () => {
    console.log('kao启动成功 http://127.0.0.1:3333')
})