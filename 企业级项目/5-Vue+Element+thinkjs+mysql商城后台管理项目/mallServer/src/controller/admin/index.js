const Base = require('../base.js');

module.exports = class extends Base {
  // 权限校验
  __before() {
    return this.checkAuth()
  }
  async userInfoAction() {
    let username = this.ctx.state.username;//因为校验里能获取到用户名信息
    let user = await this.model('member').where({ username: username }).find()
    // 设置头像路径
    let filepath = think.ROOT_PATH + '/www/static/image/avatar/avatar' + user.id + '.png';
    if (think.isFile(filepath)) {//如果有这个路径就
      user.avatar = this.config('hostIpPort') + '/static/image/avatar/avatar' + user.id + '.png';
    } else {
      // 如果没有上传头像就用这个。
      user.avatar = this.config('hostIpPort') + '/static/image/avatar/avatar.jng'

    }

    return this.json({ userinfo: user })

  }

};
