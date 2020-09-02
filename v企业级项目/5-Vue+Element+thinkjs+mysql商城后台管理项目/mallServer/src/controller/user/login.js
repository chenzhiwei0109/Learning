const Base = require('../base.js');

module.exports = class extends Base {


  indexAction() {
    return this.json({ msg: '登录' })
  }
  async loginAction() {
    if (this.method == 'POST') {
      // 获取用户名密码
      let username = this.post('username')
      let password = this.post('password');
      // 查找数据表
      let user = await this.model('member').where({ username: username }).find();//找一条
      // 判断提交的密码是否和查询的密码一致
      if (user.password === this.verifyPassword(password)) {
        // 完成登录-更新token,并且有时效性
        const token = this.updateAuth(username)
        this.json({ state: '登录成功', token })
      } else {
        return this.json({ state: '登录失败' })
      }
    }
  }

  verifyPassword(pwd) {
    // 使用cmswing进行加盐加密.他只能正向尝试。
    return think.md5(think.md5('www.cmswing.com') + think.md5(pwd) + think.md5('Arterli'))
  }
};
