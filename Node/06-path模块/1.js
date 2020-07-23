console.log('当前目录', __dirname);//d:\Learning\Node\06-path模块
console.log('当前文件目录', __filename)//d:\Learning\Node\06-path模块\1.js

const path = require('path')

// 必须是斜杠不是反斜杠
let strPath = 'd:/Learning/Node/06-path模块/1.js'
// 获取后缀
console.log(path.extname(strPath))  //.js

// 获取文件/文件夹名称
console.log(path.basename(__dirname))//06-path模块
console.log(path.basename(strPath))//1.js


//获取目录路径
console.log(path.dirname(strPath))

// 规范化路径，序列化路径，使得能够在windows操作
console.log(path.normalize(strPath))  //  d:\Learning\Node\06-path模块\1.js

//合并路径,
// console.log(__dirname+'abc.png')
console.log(path.join(__dirname+'/abc.png'));//  d:\Learning\Node\06-path模块\abc.png

// 获取绝对路径合并
console.log(path.resolve(__dirname,'./abc.png')) //d:\Learning\Node\06-path模块\abc.png
console.log(path.resolve(__dirname,'abc.png')) //d:\Learning\Node\06-path模块\abc.png


// join和resolve区别
console.log(path.join('./a','./b'));  //a\b
console.log(path.resolve('./a','./b'));  //C:\Users\19144\Desktop\09day\09day\abc\a\b