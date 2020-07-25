const Base = require('../base.js');

module.exports = class extends Base {
  async userlistAction() {
    let userList = await this.model('user').select()
    this.json(userList)
    this.success(userList)
    
    // this.fail({msg:'数据获取失败'})
  }
};
