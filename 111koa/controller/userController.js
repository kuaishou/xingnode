const {User}= require('../model/index')

module.exports.index=async(ctx,next)=>{
    var user=await User.findById(ctx.params.userId)
    ctx.body='usevvvr'
}


