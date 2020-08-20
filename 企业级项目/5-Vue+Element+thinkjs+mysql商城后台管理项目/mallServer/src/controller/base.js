const jsonwebtoken = require('jsonwebtoken')
module.exports = class extends think.Controller {
  __before() {

  }

  // session -> cookie
  //JWT 跨域身份验证方案，JSON WEB TOKEN
  //1用户发送用户名和密码
  //2验证用户名和密码，保存验证信息
  //3返回口令给到前端
  //4前端将口令保存起来
  //5下次发送请求的时候，将口令再发给服务器
  //6服务器可以验证口令，判断用户的信息和登陆状态
  //7更新口令
  authFail() {
    this.json({ error: "JWT校验失败" });
    return false;
  }
  checkAuth() {
    let token = this.ctx.headers['x-token'];
    const { secret, cookie, expire } = this.config('jwt')

    try {
      var tokenObj = token ? jsonwebtoken.verify(token, secret) : {};
      this.ctx.state.username = tokenObj.name;
    } catch (error) {

      return this.authFail()
    }
    console.log(tokenObj)
    if (!tokenObj.name) {
      return this.authFail()
    }

    this.updateAuth(token.name)
  }

  updateAuth(userName) {
    const userInfo = {
      name: userName
    };
    // 获取jwt的配置信息
    const { secret, cookie, expire } = this.config('jwt')
    // 加密方式
    const token = jsonwebtoken.sign(userInfo, secret, { expiresIn: expire });
    this.cookie(cookie, token);
    this.header('authoriztion', token);
    return token;
  }

  verifyPassword(pwd) {
    // 使用cmswing进行加盐加密.他只能正向尝试。
    return think.md5(think.md5('www.cmswing.com') + think.md5(pwd) + think.md5('Arterli'))
  }

};
