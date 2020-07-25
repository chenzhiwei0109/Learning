const Base = require('../base.js');

module.exports = class extends Base {
  indexAction() {
    this.model('user').where({
      username:'陈志伟'
    }).update({
      msg:'更新'
    })
    this.success({msg:"更新成功"})
  }

};
