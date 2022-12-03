const router = require('@koa/router');
const routers = new router({prefix:'/api/v1'});//路由http://127.0.0.1:3333/api/v1/video

routers.get('/user',(ctx ,next)=>{
    ctx.body = 'hello koarouter get user'
})
routers.get('/video/:id/:age',(ctx ,next)=>{
    console.log(ctx.params.id,ctx.params.age)

    ctx.body = 'hello koarouter get video'
})
routers.post('/user',(ctx ,next)=>{
    console.log(ctx.request.body)
    // ctx.throw(500,'报错了')
    ctx.body = 'hello koarouter post user'
})


module.exports=routers