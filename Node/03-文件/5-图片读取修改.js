let fs = require('fs')

fs.readFile('title.jpg',(err,data)=>{
  fs.writeFile('title复制.jpg',data,(err)=>{
    if(err){
      console.log(err)
    }
  })
})


