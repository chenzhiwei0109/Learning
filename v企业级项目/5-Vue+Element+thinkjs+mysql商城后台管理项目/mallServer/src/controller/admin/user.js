const Base = require('../base.js');

module.exports = class extends Base {
  // 权限校验
  __before() {
    return this.checkAuth()
  }
  indexAction() {
    return this.json({ msg: '用户管理' })
  }

  // 取出用户列表
  async userlistAction() {
    let page = this.get('page') ? this.get('page') : 1
    // 查找member数据库，按照id排序，获取第一页十个数据
    let userlist = await this.model('member').order('id').page(page, 10).select()
    // 获取总条数
    let total = await this.model('member').count()
    this.json({ userlist, total })
  }

  //删除
  async deluserAction() {
    let userid = this.get('id');
    await this.model('member').where({ id: userid }).delete()
    this.json({
      "msg": "删除成功"
    })
  }

  //获取用户信息,查看关联关系。
  async userinfoAction() {
    let userid = this.get('id');
    // 连接3张表查询，通过userid找到member表里的用户信息，
    //在通过member的id找到auth_user_role表的userid对应的那条数据，在通过这条role_id找到角色的详细信息
    let user = await this.model('member').where({ 'cmswing_member.id': userid })
      .join({
        table: 'auth_user_role',
        join: "left",
        as: 'l', //别名
        on: ['id', 'user_id']//左表的id和右表user_id相连
      })
      .join({
        table: 'auth_role',//权限名称
        join: "left",
        as: 'c',
        on: ['l.role_id', 'id']
      }).field('username,desc,password,mobile,email,role_id').find() //要提取的内容信息。 
    this.json({ user })
  }

  // 更新
  async updateUserAction() {
    let postUser = this.post();
    if (this.method == 'POST' && postUser.password != "") {
      await this.model('member').where({ id: postUser.id }).update({ password: this.verifyPassword(postUser.password), email: postUser.email, mobile: postUser.mobile });
      let role = await this.model('auth_user_role').where({ user_id: postUser.id }).find()
      // console.log(role)
      if (role.id) {
        await this.model('auth_user_role').where({ user_id: postUser.id }).update({ role_id: postUser.role_id });
      } else {
        await this.model('auth_user_role').add({ user_id: postUser.id, role_id: postUser.role_id });
      }
      this.json({ "msg": "更新成功2" });

    } else if (this.method == 'POST') {
      await this.model('member').where({ id: postUser.id }).update({ email: postUser.email, mobile: postUser.mobile });
      let role = await this.model('auth_user_role').where({ user_id: postUser.id }).find()
      // console.log(role)
      if (role.id) {
        await this.model('auth_user_role').where({ user_id: postUser.id }).update({ role_id: postUser.role_id });
      } else {
        await this.model('auth_user_role').add({ user_id: postUser.id, role_id: postUser.role_id });
      }

      this.json({ "msg": "更新成功1" });
      // console.log(postUser)
    } else {
      this.json({ error: "100", "msg": "请使用post方法" })
    }
  }

  // 添加
  async addUserAction() {
    if (this.method == 'POST') {
      let postUser = this.post();

      // 查找用户
      let user = this.model('member').where({
        username: postUser.username
      }).find();

      // 添加
      if (!user.username) {
        postUser.status = 1;
        // 添加
        let addinfo = await this.model('member').add(postUser)
        // 查找
        let user = await this.model('member').where({
          username: postUser.username
        }).find()
        // 修改角色权限设置。
        await this.model('auth_user_role').add({
          user_id: user.id,
          role_id: postUser.role_id
        });
        this.json({
          msg: "添加成功"
        })
      } else {
        this.json({
          msg: "添加失败",
          content: "用户名已存在"
        })
      }

    }
  }
};
