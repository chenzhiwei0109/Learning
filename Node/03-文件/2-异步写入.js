let fs = require('fs')

/* 
fs.writeFile

 */

// 异步打开文件,继续往下执行。
fs.open('text2.txt', 'w', (err, fd) => {
  fs.writeFile(fd, '异步写入', (err) => {
    if (err) {
      console.log(err)
    }else{
      console.log('完成')
      fs.close(fd,()=>{
        console.log('文件关闭完成')
      }) 
    }
  })
})

console.log('123')