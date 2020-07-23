let fs = require('fs')

// 只有异步才能发挥node性能

// 删除
// fs.unlink('text1.html',err=>{
//   if(err){
//     console.log(err)
//   }else{
//     console.log('删除成功')
//   }
// })

// 读取目录下所有
fs.readdir('./',(err,files)=>{
  if(err){
    console.log(err)
  }else{
    console.log(files)  //files是个数组
  }
})