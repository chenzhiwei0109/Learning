'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, ENUM, TEXT } = Sequelize;
    return queryInterface.createTable('user', {
      id: {
        type: INTEGER(20),
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: STRING(30),
        allowNull: false,//不许null，不然会影响性能
        defaultValue: '',
        comment: '用户名',
        unique: true  //用户名是唯一的
      },
      nickname: {
        type: STRING(30),
        allowNull: false,
        defaultValue: '',
        comment: '昵称',
      },
      email: {
        type: STRING(160),
        allowNull: false,
        defaultValue: '',
        comment: '邮箱'
      },
      password: { //密码后期要加密所以不要限制长度
        type: STRING,
        allowNull: false,
        defaultValue: '',
        comment: "密码"
      },
      avatar: {
        type: STRING,
        allowNull: true,
        defaultValue: '',
        comment: '头像'
      },
      phone: {
        type: STRING(11),
        allowNull: false,
        defaultValue: '',
        comment: '手机'
      },
      sex: {  //枚举类型 三个值
        type: ENUM,
        values: ["男", '女', '保密'],
        allowNull: false,
        defaultValue: '男',
        comment: '性别'
      },
      desc: {
        type: TEXT,
        allowNull: false,
        defaultValue: '',
        comment: '个性签名',
      },
      created_time: DATE,
      updated_time: DATE,

    });
  },

  down: async (queryInterface, Sequelize) => {
    // 删除表中内容
    return queryInterface.dropTable('user');

  }
};
