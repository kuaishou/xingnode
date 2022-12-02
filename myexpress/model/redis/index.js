const Redis=require('ioredis')
const redis= new Redis(6379,'192.168.0.106',{password:'root'})//Redis服务器参数1/端口号、2、ip地址、3、密码

redis.on('error',err=>{
    console.log('Redis链接错误',err)
    redis.quit()//中断链接不要重连
})
redis.on('ready',()=>{
    console.log('Redis链接成功')
})

module.exports=redis