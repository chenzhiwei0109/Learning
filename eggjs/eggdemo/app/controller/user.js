'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  // 返回用户信息
  async getIndex() {
    let result = [{
      id:1,
      username:'小明',
      nickname:'昵称',
      sex:'男'
    }]

    this.ctx.body = {
      msg:'ok',
      data:result
    }
  }

  // 读取用户数据
  async read(){
    this.ctx.body = this.ctx.params.id;
    // 修改状态码
    this.ctx.status = 201;

  }

  // 创建用户
  async createUser(){
    
  }
}

module.exports = UserController;
