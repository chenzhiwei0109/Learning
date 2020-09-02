
module.exports = app => {
  const { router, controller } = app;

  // 注册
  router.post('/reg', controller.user.reg);
  // 登录
  router.post('/login', controller.user.login);
  // 退出登录
  router.post('/logout', controller.user.logout);

  //上传头像
  router.post('/uploadavatar', controller.file.uploadavatar);

  // 修改信息
  router.post('/updateuser', controller.user.update_user);

};