var inquirer = require('inquirer')
var config = require('../../config')
// const download = require('download-git-repo')
const downloadFun=require('./download')

//模块化
const myAction = async (project, args) => {//参数是这两个的值<project> [other...]  // mycli crt xing hao  输出xing   [ 'hao' ]     
    //   命令行的执行逻辑代码 
    //下载选择不同的node框架---express 、koa 、egg 、nest 
    // console.log(project)
    // console.log(args)
    const answer = await inquirer.prompt([{
        type: 'list',
        name: 'framwork',
        // choices: ['express','koa','egg','nest'],
        choices: config.framwork,
        message: '请选择您要用的框架'
    }]).then((answer) => {
        return answer
        console.log(answer)
    })
    //下载代码模板
    // download('direct:' + config.framworkUrl[answer.framwork], project, { clone: true }, function (err) {
    //     console.log(err ? 'Error' : 'Success')
    // })
    downloadFun(config.framworkUrl[answer.framwork],project)

}
module.exports = myAction