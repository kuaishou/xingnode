const router = require('@koa/router');
const routers = new router({prefix:'/api/v1'});//路由http://127.0.0.1:3333/api/v1/video

routers.get('/user',(ctx ,next)=>{
    ctx.body = 'hello koarouter get user'
})
routers.get('/video',(ctx ,next)=>{
    ctx.body = 'hello koarouter get video'
})


module.exports=routers