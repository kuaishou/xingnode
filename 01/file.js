var fs = require('fs')
fs.readFile('./a.txt', 'UTF-8', (err, succ) => {
    console.log(succ)
    if (!err) {
        var newdata = succ + '邢浩东新增加的内容'
        fs.writeFile('./a.txt', newdata, (errs) => {
            if (!errs) {
                console.log('添加成功')
            }
        })
    }
})


