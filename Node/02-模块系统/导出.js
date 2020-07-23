function fn(){
  console.log('fn')
}
let test = {
  name:'zs'
}

// module.exports = test;

exports.fn = fn;
exports.test = test;
// let file = require('./导出.js')
