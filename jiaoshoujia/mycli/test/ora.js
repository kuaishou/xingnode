const ora = require('ora')
const spinner = ora().start()
spinner.text = 'xingloading.....'
setTimeout(() => {
    console.log(111)
    // spinner.succeed('安装成功')
    // spinner.info('安装成功')
    spinner.fail('安装失败')
}, 5000)

