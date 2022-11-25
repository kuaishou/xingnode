var inquirer = require('inquirer')
var config = require('../../config')
//模块化
const myAction = function (project, args) {//参数是这两个的值<project> [other...]  // mycli crt xing hao  输出xing   [ 'hao' ]     
    //   命令行的执行逻辑代码 
    //下载选择不同的node框架---express 、koa 、egg 、nest 
    // console.log(project)
    // console.log(args)
    inquirer.prompt([{
        type: 'list',
        name: 'framwork',
        // choices: ['express','koa','egg','nest'],
        choices: config.framwork,
        message: '请选择您要用的框架'
    }]).then((answer) => {
        console.log(answer)
    })
}
module.exports = myAction