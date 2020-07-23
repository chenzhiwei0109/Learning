// 引入子进程模块
const child_process = require('child_process')


for (var index = 0; index < 3; index++) {
  // 开启新进程执行index.js并传入参数
  var workProcess = child_process.exec('node index.js ' + index, function (err, stdout, stderr) {
    if (err) {
      console.log(err)
    } else {
      console.log('stdout:', stdout) //子进程输出的结果。
      console.log('stderr:', stderr)
    }
  })

  workerProcess.on('exit',function(code){
        console.log('子进程已退出,退出码：'+code)
    })
}
