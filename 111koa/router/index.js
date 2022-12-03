const Router=require('@koa/router')
const router=new Router({prefix:'/api/v1'})
const user=require('../controller/userController')


router.get('/user/:userId',user.index)

module.exports=router