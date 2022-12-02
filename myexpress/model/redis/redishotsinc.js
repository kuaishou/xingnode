const { redis } = require('./index')

exports.hotInc = async (videoid, incNum) => {//Redis记录热度值（视频id、视频热度增加值）
    var data = await redis.zscore('videohots', videoid)
    var inc;
    if (data) {
        inc = await redis.zincrby('videohots', incNum, videoid)
    } else {
        inc = await redis.zadd('videohots', incNum, videoid)
    }
    return inc
}

exports.topHots = async (num) => {//Redis获取热门视频
    var paixu = await redis.zrevrange('videohots',0,-1, 'withscores')//排序的视频
    var newarr=paixu.sclice(0,num*2);
    var obj={}
    for(let i=0;i<newarr.length;i++){
        if(i%2==0){
            obj[newarr[i]]=newarr[i+1]
        }
    }
    return obj
}