let http = require('http')
let server = http.createServer()

server.on('request', (req, res) => {
  console.log(req.url)
  // 根据不一样的地址返回不一样的内容
  if (req.url == '/') {
    res.end('hello world')

  }else if(req.url=='/login'){
    res.end('login')
  }else{
    res.end('404')
  }
})
server.listen(3000, () => {
  console.log('启动', 'http://127.0.0.1:3000')
})