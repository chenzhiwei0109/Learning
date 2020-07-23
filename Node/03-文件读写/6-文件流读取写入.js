let fs = require('fs')

//创建读取流
let rs = fs.createReadStream('title.jpg');

// 创建写入流
let ws = fs.createWriteStream('title流复制.jpg')



// 监听读取流
rs.once('open',function(){
  console.log('读取流开启')
})

rs.once('close',function(){
  console.log('读取流关闭')
})


// 监听写入流
ws.once('open',function(){
  console.log('写入流开启')
})

ws.once('close',function(){
  console.log('写入流关闭')
})

// 读取的数据写入
rs.on('data',data=>{
  console.log(1)
  ws.write(data)
  ws.end()
})
