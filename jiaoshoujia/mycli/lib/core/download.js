const download = require('download-git-repo')
const ora = require('ora')
var chalk = require('chalk')
const downloadFun = (url, project) => {
  const spinner = ora().start()
  spinner.text = '在下载着呢；小伙子别急.....'
  download('direct:' + url, project, { clone: true }, function (err) {
    if (err) {
      spinner.fail('安装失败了')
    } else {
      spinner.succeed('恭喜你安装成功')
      console.log('开始下一步把')
      console.log(chalk.blue.bold('cd '+project) )
      console.log('npm install')
      console.log('npm run dev')

    }
    // console.log(err ? 'Error' : 'Success')
  })
}

module.exports = downloadFun