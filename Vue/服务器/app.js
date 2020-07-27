let express = require('express')
let app = express()

app.use(express.static('static'))

app.listen(3000,()=>{
  console.log('服务器启动','http://127.0.0.1:3000')
})