const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    let user = {
      username: 'zs',
      age: '18'
    }
    // orm映射 object relation model
    // let userList = await this.model().table('user').select()

    // 利用模型
    let userList = await this.model('modeluser').getUserList()


    this.assign(userList[0]);

    // 显示首页 默认找index_index_html 
    return this.display('czw');
  }
};
