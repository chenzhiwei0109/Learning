//同步写入时,写完这一个然后才会往下执行。
let fs = require('fs')

// 同步打开文件
let fd = fs.openSync('text1.html', 'w')
console.log(fd)

let a = '张三'
//写入内容
fs.writeFileSync(fd, `<div>${a}</div>`)


//退出文件
fs.closeSync(fd);
