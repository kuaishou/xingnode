var fs=require('fs')
fs.readFile('./a.txt','UTF-8',(err,succ)=>{
    console.log(err)
    console.log(succ)
})

