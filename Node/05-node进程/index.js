// node是运行在单进程v8。
// node不是真正单进程，他也有io存在

// child_process模块创建子进程
// 执行拿到的参数
console.log('进程：' + process.argv[2] + "执行。")