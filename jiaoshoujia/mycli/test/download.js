const download = require('download-git-repo')
download('direct:https://gitee.com/beiyaoyaoyao/koa-template.git', 'xingKoa', { clone: true }, function (err) {
  console.log(err ? 'Error' : 'Success')
})


