'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.apiSuccess({ name: '这是' }, 'ok', 300)
    ctx.throw('error')
  }
}

module.exports = HomeController;
