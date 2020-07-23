let fs = require('fs')

function destoryDir(path) {
  var dirArr = fs.readdirSync(path)
  dirArr.forEach(item => {
    //判断路径是否是目录  ./static + / + 
    let filePath = path + '/' + item;
    // 读取文件信息

    var stat = fs.statSync(filePath);
    // 判断是文件还是目录
    if (stat.isFile()) {
      fs.unlinkSync(filePath)
    } else if (stat.isDirectory()) {
      // 递归删除内容
      destoryDir(filePath)
    }

  })

  // 删除空目录
  fs.rmdirSync(path)
}

destoryDir('./static')