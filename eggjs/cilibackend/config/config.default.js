/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  config.valparams = {
    locale: 'zh-cn',
    //主动抛出异常
    throwError: true
  };

  // 配置那些路由需要登录权限验证
  config.auth = {
    //ignore: ['/reg', '/login']
    match: [
      '/logout',
      '/video',
      '/video_detail',
      '/vod/sign',
      '/comment',
      '/fava',
      '/user/follow',
      '/user/unfollow',
      '/user/follows',
      '/user/fens',
      '/user/statistics',
      '/updateuser'
    ]
  };

  // 关闭cors
  config.security = {
    // 关闭 csrf
    csrf: {
      enable: false,
    },
    // 跨域白名单
    domainWhiteList: ['http://localhost:3000'],
  };
  // 允许跨域的方法
  config.cors = {
    origin: '*',
    allowMethods: 'GET, PUT, POST, DELETE, PATCH'
  };

  // 数据库
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: "root",
    password: 'root',
    port: 3306,
    database: 'cilibackend',
    // 中国时区
    timezone: '+08:00',
    define: {
      // 取消数据表名复数
      freezeTableName: true,
      // 自动写入时间戳 created_at updated_at
      timestamps: true,
      // 字段生成软删除时间戳 deleted_at
      // paranoid: true,
      createdAt: 'created_time',
      updatedAt: 'updated_time',
      // deletedAt: 'deleted_time',
      // 所有驼峰命名格式化
      underscored: true
    }
  };

  // 密码处理
  config.crypto = {
    secret: 'qhdgw@45ncashdaksh2!#@3nxjdas*_672'
  };

  // 登录验证
  exports.jwt = {
    secret: 'qhdgw@45ncashdaksh2!#@3nxjdas*_672'
  };
  // 缓存
  config.redis = {
    client: {
      port: 6379,          // Redis port
      host: '127.0.0.1',   // Redis host
      password: '',  			 //密码默认没有
      db: 0,							 //
    },
  }
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1597923339860_9712';

  // add your middleware config here
  config.middleware = ['errorHandler', 'auth'];

  // 上传文件
  config.multipart = {
    fileSize: '50mb',//上传50m以内
    mode: 'stream', //流形式上传
    fileExtensions: ['.xls', '.txt', '.jpg', '.JPG', '.png', '.PNG', '.gif', '.GIF', '.jpeg', '.JPEG'], // 扩展几种上传的文件格式
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
