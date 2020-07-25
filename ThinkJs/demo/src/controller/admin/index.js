const Base = require('../base.js');

module.exports = class extends Base {
  indexAction() {
 
    // 显示首页 默认找index_index_html 
    return this.display();
  }
  loginAction(){
    return this.display()
  }
};
