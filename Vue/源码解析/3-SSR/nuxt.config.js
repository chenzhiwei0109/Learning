export default {
  router: {
    linkActiveClass:'active',
    extendRoutes(routes, resolve) {
      // 清除Nuxtjs基于pages目录默认生成的路由表规则。这时候我们需要手动配置
      routes.splice(0)
      routes.push(...[
        {
          path: '/',
          component: resolve(__dirname, 'pages/layout'),
          children: [
            {
              path: '',//默认子路由,
              name: 'home',
              component: resolve(__dirname, 'pages/home'),
            },
            {
              path: 'login',
              name: 'login',
              component: resolve(__dirname, 'pages/loginregister'),
            },
            {
              path: 'register',//默认子路由,
              name: 'register',
              component: resolve(__dirname, 'pages/loginregister'),
            },
            {
              path: 'profile/:username',//默认子路由,
              name: 'profile',
              component: resolve(__dirname, 'pages/profile'),
            },
            {  //设置
              path: 'settings',//默认子路由,
              name: 'settings',
              component: resolve(__dirname, 'pages/settings'),
            },
            {
              path: 'editor',//默认子路由,
              name: 'editor',
              component: resolve(__dirname, 'pages/editor'),
            },
            {
              path: 'article/:slug',//默认子路由,
              name: 'article',
              component: resolve(__dirname, 'pages/article'),
            },
          ]
        },

      ])
    }
  }
}