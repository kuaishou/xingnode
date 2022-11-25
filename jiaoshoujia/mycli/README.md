先创建bin目录,创建cli.js文件
1、npm int//初始化项目自动指向   "bin": {"mycli": "bin/cli.js"},
2、在bin目录下面cli.js 里面第一行添加#!/usr/bin/env node  让mycli挂载到全局；无论在那个文件下都可以执行mycli命令
3、npm link//挂载到全局的命令工具中

输入mycli命令行输出
<!-- [
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\xing\\AppData\\Roaming\\npm\\node_modules\\mycli\\bin\\cli.js',
  '--help'   //传参
] -->
获取到参数  console.log('命令参数',process.argv[2])

一、给mycli --help输出一些提示
使用commander工具包解决该问题 npm install commander

  const {program} =require('commander')
program.option('-f --framwork <framwork>','设置框架')//添加功能提示
program.parse(process.argv)//commander添加命令行参数处理


二、命令行问答工具inquirer
要下载npm install --save inquirer@^8.0.0版本才可以使用require

执行命令自动创建一个项目


