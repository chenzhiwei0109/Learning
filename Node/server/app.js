// 实现静态服务器
let express = require('express')
// 实例化
let app = express()

// 实现静态服务器 
app.use(express.static('static'))

// 自定义接口
app.get('/api/userlist', (req, res) => {
  res.json({
    state: 'ok',
    userList: [
      { username: '陈志伟', sex: '男' },
      { username: '伟', sex: '男' },
      { username: '志伟', sex: '男' }
    ]
  })
})

// 启动
app.listen(3000, () => {
  console.log('启动服务器:http://127.0.0.1:3000')
})