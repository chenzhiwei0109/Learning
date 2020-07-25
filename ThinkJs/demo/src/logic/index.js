module.exports = class extends think.Logic {
  indexAction() {
    console.log(this.ctx);//ctx是上下文 有request url等等
  }
};
