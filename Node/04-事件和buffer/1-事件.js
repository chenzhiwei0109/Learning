// node是事件驱动，我们也可以自己创造事件

let fs = require('fs')
let event = require('events')

// 创建事件对象

var eventTime = new event.EventEmitter();

// 创建监听创建目录事件
eventTime.on('mkdired',function(){
  console.log('创建事件触发')
})
eventTime.on('mkdired',function(msg){
  console.log('触发后第二步')
  console.log(msg)
})



// 触发事件
// eventTime.emit('mkdired')
eventTime.emit('mkdired','123')
console.log(1)

// 创建文件夹
fs.mkdir('./img',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('创建成功')
        eventTime.emit("mkdired","老陈真帅")
    }
    
})

// 删除文件夹
// fs.rmdir('./img',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('文件夹删除成功')
//     }
// })