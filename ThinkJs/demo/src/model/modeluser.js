module.exports = class extends think.Model {
  getUserList() {
    return this.table('user').select()
  }
};
