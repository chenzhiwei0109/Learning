'use strict';

const Controller = require('egg').Controller;
const crypto = require('crypto');

class UserController extends Controller {

  // 注册用户
  async reg() {
    let { ctx, app } = this;

    ctx.validate({
      username: {
        type: 'string',
        required: true,
        range: {
          min: 5,
          max: 20
        },
        //别名
        desc: '用户名'
      },
      password: {
        type: 'string',
        required: true,
        desc: '密码',
        range: {
          min: 6,
          max: 20
        },
      },
      repassword: {
        type: 'string',
        required: true,
        desc: '确认密码'
      }
    });

    let { username, password, repassword } = ctx.request.body;
    if (password !== repassword) {
      return ctx.throw(400, '密码和确认密码不一致')
    }

    if (await app.model.User.findOne({
      where: {
        username
      }
    })) {
      return ctx.throw(400, '用户名已存在')
    }

    let user = await app.model.User.create({
      username,
      password
    });
    if (!user) {
      ctx.throw(400, '创建用户失败')
    }
    ctx.apiSuccess(true, '注册用户成功:' + username, 200);
  }

  // 登录
  async login() {
    const { ctx, app } = this;
    // 参数验证
    ctx.validate({
      username: {
        type: 'string',
        required: true,
        desc: '用户名'
      },
      password: {
        type: 'string',
        required: true,
        desc: '密码'
      },
    });
    let { username, password } = ctx.request.body;
    // 验证该用户是否存在
    let user = await app.model.User.findOne({
      where: {
        username,
      }
    });
    if (!user) {
      return ctx.apiFail('用户不存在');
    }
    // 验证密码
    await this.checkPassword(password, user.password);

    //转换成单纯的对象
    user = JSON.parse(JSON.stringify(user));
    // 生成token
    let token = ctx.getToken(user);
    // 把密码移除
    user.token = token;
    delete user.password;
    // 加入缓存中  无时间限制
    if (!await this.service.cache.set('user_' + user.id, token)) {
      ctx.throw(400, '登录失败');
    }
    // 返回用户信息和token
    return ctx.apiSuccess(user);
  }

  // 退出
  async logout() {
    const { ctx, service } = this;
    // 拿到当前用户id
    let current_user_id = ctx.authUser.id;
    // 移除redis当前用户信息
    if (!await service.cache.remove('user_' + current_user_id)) {
      ctx.throw(400, '退出登录失败');
    }
    ctx.apiSuccess('退出成功');
  }

  async update_user() {
    let { ctx, app } = this;
    //传入验证规则和被更新的视频ID
    let currentUser = ctx.authUser;
    ctx.validate({
      nickname: {
        type: 'string',
        required: false,
        desc: '昵称',

      },
      email: {
        type: 'string',
        required: false,
        desc: '邮箱'
      },
      phone: {
        type: 'string',
        required: false,
        desc: '手机'
      },
      sex: {
        type: 'string',
        required: false,
        desc: '性别'
      },
      desc: {
        type: 'string',
        required: false,
        desc: '个性签名'
      },
      avatar: {
        type: 'string',
        required: false,
        desc: '头像'
      }
    });

    //获取前端传入参数
    let {
      nickname,
      email,
      phone,
      sex,
      desc,
      avatar
    } = ctx.request.body;

    //查找符合条件的路由id
    // 
    let userinfo = await app.model.User.findOne({
      where: {
        username: currentUser.username
      }
    });

    if (!userinfo) {
      return ctx.throw(404, '没有此用户');
    }
    let res;
    if (!avatar) {
      res = await userinfo.update({
        nickname,
        email,
        phone,
        sex,
        desc
      });
    } else {
      res = await userinfo.update({
        nickname,
        email,
        phone,
        sex,
        desc,
        avatar
      });
    }

    // res = JSON.parse(JSON.stringify(res)); 

    ctx.apiSuccess(res);
  }

  // 验证密码
  async checkPassword(password, hash_password) {
    // 先对需要验证的密码进行加密
    const hmac = crypto.createHash("sha256", this.app.config.crypto.secret);
    hmac.update(password);
    password = hmac.digest("hex"); //加密形式
    let res = password === hash_password;
    if (!res) {
      this.ctx.throw(400, '密码错误'); //throw不会往下走，但是apifFail会往下走。
    }
    return true;
  }
}

module.exports = UserController;
