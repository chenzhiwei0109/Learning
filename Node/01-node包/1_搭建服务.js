let express = require('express')
let app = express()
app.get('/', (req, res) => {
  res.send('首页')
})

app.listen(3000, () => {
  console.log('服务启动', 'http://localhost:3000')
})