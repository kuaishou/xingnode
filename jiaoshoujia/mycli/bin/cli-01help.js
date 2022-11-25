#!/usr/bin/env node
const {program} =require('commander')
// console.log('mycli')
//process.argv命令行传入参数
// if(process.argv[2]){
//     console.log('命令参数',process.argv[2])
// }
program.option('-f --framwork <framwork>','设置框架')//添加功能提示
program.parse(process.argv)//commander添加命令行参数处理