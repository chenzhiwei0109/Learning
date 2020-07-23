const child_process = require('child_process');
for (var i = 0; i < 3; i++) {
    var workerProcess = child_process.spawn('node', ['index1.js', i])

    // stdout子进程的输出结果
    workerProcess.stdout.on('data', function (data) {
        console.log('data：' + data)
    })
    // stderr子进程输出的错误
    workerProcess.stderr.on('data', function (data) {
        console.log('err：' + data)
    })
    workerProcess.on('close', function (code) {
        console.log('子进程已退出,退出码：' + code)
    })
}