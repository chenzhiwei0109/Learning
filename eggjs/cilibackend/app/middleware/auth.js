module.exports = (option, app) => {
  return async (ctx, next) => {

    // 1.获取token
    const { token } = ctx.header;
    if (!token) {
      ctx.throw(400, '请求未携带token,没有权限访问接口!');
    }
    //2. 根据token解密，换取用户信息
    let user = {};
    try {
      // 尝试解密token,验证token是否有效
      user = app.jwt.verify(token, app.config.jwt.secret)
      console.log('---')
      console.log(user)
      console.log('---')

    } catch (err) {
      let fail = err.name === 'TokenExpiredError' ? 'token 已过期! 请重新获取令牌' : 'Token令牌不合法!';
      return ctx.apiFail(400, fail);
    }
    //3. 判断当前用户是否登录
    let t = await ctx.service.cache.get('user_' + user.id);
    if (!t) {
      ctx.throw(400, 'token不存在');
    }
    if (t !== token) {
      ctx.throw(400, 'token不匹配');
    }
    //4. 获取当前用户，验证当前用户是否存在。findByPk根据主键
    user = await app.model.User.findOne({
      where: {
        id: user.id
      }
    });
    if (!user) {
      ctx.throw(400, '用户不存在');
    }
    // 5. 把 user 信息挂载到全局ctx上
    ctx.authUser = user;
    // 继续往下走
    await next()
  };
};