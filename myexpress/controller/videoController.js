//user业务逻辑
exports.list = async (req, res) => {
    console.log(req.method)
    res.send('user')
}
exports.delet = async(req,res)=>{
    console.log(req.method)
    res.send('delete')
}
