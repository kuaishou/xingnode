var fs=require('fs')
fs.writeFile('./a.txt','邢浩东通过node写入的信息',(err,succ)=>{
    console.log(err)
    console.log(succ)
})

