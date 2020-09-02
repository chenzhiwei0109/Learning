'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
//故名思意 异步二进制 写入流
const awaitWriteStream = require('await-stream-ready').write;
//管道读入一个虫洞。
const sendToWormhole = require('stream-wormhole');
const dayjs = require('dayjs');

class FileController extends Controller {

  async upload() {
    // 获取文件流
    const stream = await this.ctx.getFileStream();
    // 基础的目录
    const uploadBasePath = 'app/public/uploads';
    // 生成文件名,
    //因为用户上传的文件如果同名的话会被覆盖
    const filename = `${Date.now()}${Number.parseInt(
      Math.random() * 1000,
    )}${path.extname(stream.filename).toLocaleLowerCase()}`;
    // 生成文件夹  app/public/uploads/20200101
    // 按照日期创建文件夹。
    const dirname = dayjs(Date.now()).format('YYYY/MM/DD');
    // 定义创建文件夹方法
    function mkdirsSync(dirname) {
      // 如果路径存在就返回，因为一天可能有多次
      if (fs.existsSync(dirname)) {
        return true;
      } else {
        // 如果不存在就没事
        if (mkdirsSync(path.dirname(dirname))) {
          fs.mkdirSync(dirname);
          return true;
        }
      }
    }
    mkdirsSync(path.join(uploadBasePath, dirname));
    // 生成写入路径
    const target = path.join(uploadBasePath, dirname, filename);
    // fs模块创建写入流
    const writeStream = fs.createWriteStream(target);

    // 异步写入
    try {
      //异步把文件流 写入
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      //如果出现错误，关闭管道
      await sendToWormhole(stream);
      this.ctx.throw(500, err);
    }
    //获取协议 域名
    const { protocol, host } = this.ctx.request;
    let url = path.join('/public/uploads', dirname, filename).replace(/\\|\//g, '/');
    url = protocol + '://' + 'cilicili.cchenzw.top' + url
    this.ctx.apiSuccess({ url });
  }

  async uploadavatar() {
    // 获取文件流
    const stream = await this.ctx.getFileStream();
    // 基础的目录
    const uploadBasePath = 'app/public/uploadavatar';
    // 生成文件名,
    //因为用户上传的文件如果同名的话会被覆盖
    const filename = `${Date.now()}${Number.parseInt(
      Math.random() * 1000,
    )}${path.extname(stream.filename).toLocaleLowerCase()}`;
    // 生成文件夹  app/public/uploadAvatar/20200101
    // 按照日期创建文件夹。
    const dirname = dayjs(Date.now()).format('YYYY/MM/DD');
    // 定义创建文件夹方法
    function mkdirsSync(dirname) {
      // 如果路径存在就返回，因为一天可能有多次
      if (fs.existsSync(dirname)) {
        return true;
      } else {
        // 如果不存在就没事
        if (mkdirsSync(path.dirname(dirname))) {
          fs.mkdirSync(dirname);
          return true;
        }
      }
    }
    mkdirsSync(path.join(uploadBasePath, dirname));
    // 生成写入路径
    const target = path.join(uploadBasePath, dirname, filename);
    // fs模块创建写入流
    const writeStream = fs.createWriteStream(target);

    // 异步写入
    try {
      //异步把文件流 写入
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      //如果出现错误，关闭管道
      await sendToWormhole(stream);
      this.ctx.throw(500, err);
    }
    //获取协议 域名
    const { protocol, host } = this.ctx.request;
    let url = path.join('/public/uploadavatar', dirname, filename).replace(/\\|\//g, '/');
    url = protocol + '://' + host + url
    // url = protocol + '://' + 'cilicili.cchenzw.top' + url
    this.ctx.apiSuccess({ url });
  }

}

module.exports = FileController;