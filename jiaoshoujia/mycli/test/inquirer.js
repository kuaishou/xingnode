var inquirer = require('inquirer')
inquirer.prompt([{
    type: 'input',
    name: 'username',
    message: '请输入您的项目名字'

}]).then((answer) => {
    console.log(answer)
})


// var inquirer = import('inquirer')
