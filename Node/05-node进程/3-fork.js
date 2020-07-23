const child_process = require('child_process');
for(var i = 0;i<3;i++){
    // stdout子进程的输出结果
    // stderr子进程输出的错误
    var workerProcess = child_process.fork('index1.js',[i])
    
    workerProcess.on('close',function(code){
        console.log('子进程已退出,退出码：'+code)
    })
}