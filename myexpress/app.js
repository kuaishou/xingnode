const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./router/index')

const app = express()
const PORT = process.env.PORT || 3008

//内置中间件-数据解析
app.use(express.json())//解析客户端发了json数据
app.use(express.urlencoded())//解析客户端发了数据

//跨域中间件 yarn add cors
app.use(cors())

//日志中间件 yarn add morgan
app.use(morgan('dev'))

//路由中间件整理
app.use('/api/v1/', router)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
