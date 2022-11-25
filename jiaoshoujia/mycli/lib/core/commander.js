//模块化
const myAction = require('./action')
const mycommander = function (program) {
    program
        .command('create <project> [other...]')
        .alias('crt')//简写类似npm --help 和简写是 npm --h
        .description('都让开邢浩东开始创建项目了')
        .action(myAction)
}
module.exports = mycommander