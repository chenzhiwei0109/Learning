let fs = require('fs')

let ws = fs.createWriteStream('text3.txt')

// 监听通道打开
ws.once('open',()=>{
  ws.write('写入流1')
  ws.write('写入流2')
  ws.write('写入流3')
  // 写入结束
  ws.end()
})

// 监听关闭
ws.once('close',()=>{
  console.log('通道关闭')
})