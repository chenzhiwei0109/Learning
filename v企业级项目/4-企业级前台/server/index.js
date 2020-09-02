let express =require('express')
let app = express()


// 后端跨域处理
// app.use((req,res,next)=>{
//   res.append('Access-Control-Allow-Origin','*')
//   res.append('Access-Control-Allow-headers','*')
//   next()
// })


app.get('index/banner',(req,res)=>{
  res.json({
    msg:'banner'
  })
})
app.listen(3000,()=>{
  console.log('成功')
})