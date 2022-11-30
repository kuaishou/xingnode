const express = require('express')
const router = require('./router/index')
const routerVideo = require('./router/video')

// 加一个注释，用以说明，本项目代码可以任意定制更改
const app = express()
app.use('/user',router)//使用router中间件
app.use('/video',routerVideo)//使用router中间件
app.use((req,res,next)=>{
  res.status(404).send('找不到该接口')
})
const PORT = process.env.PORT || 3000


//内置中间件next调用
// app.get('/user', (req, res, next) => {
//   console.log('中间件')
//   next()
// }, function (req, res, next) {
//   console.log('next下一步了')
//   return res.send('./user')
// })

//原始打印日志，每个位置都要调用logs方法
// function logs(req){
//   console.log(`${req.method},${req.url},${Date.now()}`)
// }

//中间件打印日志统一处理
// app.use((req, res,next) => {//console中间件处理console；中间件都要进行next();中间件要写在需要调用的逻辑前面
//   console.log(`${req.method},${req.url},${Date.now()}`)
//   next()
// })
// app.get('/', (req, res) => {
//   // logs(req)
//   res.send('./index')
// })
// app.get('/register', (req, res) => {
//   // logs(req)
//   res.send('./register')
// })
// app.get('/login', (req, res) => {
//   // logs(req)
//   res.send('./login')
// })
// // 挂载路由
// app.use('/api', router)

// // 挂载统一处理服务端错误中间件
// app.use(errorHandler())

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
