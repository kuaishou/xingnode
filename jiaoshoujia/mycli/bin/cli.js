#!/usr/bin/env node
const { program } = require('commander')
const myhelp =require('../lib/core/help')
const mycommander=require('../lib/core/commander')
console.log('mycli')
//process.argv命令行传入参数
// if(process.argv[2]){
//     console.log('命令参数',process.argv[2])
// }
// program.option('-f --framwork <framwork>', '设置框架')//添加功能提示
myhelp(program)  //在 lab core里面模块化封装help

// program
//     .command('create <project> [other...]')
//     .alias('crt')//简写类似npm --help 和简写是 npm --h
//     .description('都让开邢浩东开始创建项目了')
//     .action((project, args) => {//参数是这两个的值<project> [other...]   
//         // mycli crt xing hao  输出xing   [ 'hao' ]
//         console.log(project)
//         console.log(args)
//     })
mycommander(program)  //在 lab core commander.js里面模块化封装上面代码

program.parse(process.argv)//commander添加命令行参数处理