let fs = require('fs')

//创建读取流
let rs = fs.createReadStream('title.jpg');

// 创建写入流
let ws = fs.createWriteStream('title流复制简易.jpg')

// 创建管道，流入
rs.pipe(ws)