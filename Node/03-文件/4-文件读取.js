let fs = require('fs')

fs.readFile('text1.html',(err,data)=>{
  console.log('再执行')
  console.log(data)
  // <Buffer 3c 64 69 76 3e e5 bc a0 e4 b8 89 3c 2f 64 69 76 3e>

  //转换成字符串
  console.log(data.toString())
})
console.log('先执行')


