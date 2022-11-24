//模块化
const myAction = function (project, args) {//参数是这两个的值<project> [other...]  // mycli crt xing hao  输出xing   [ 'hao' ]       
    console.log(project)
    console.log(args)
}
module.exports = myAction