<template>
  <div>
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">{{isLogin?"登录(Sign in)":"注册"}}</h1>
            <p class="text-xs-center">
              <!-- <a href>Have an account?</a> -->
              <nuxt-link v-if="isLogin" to="/register">没有账号？点击注册</nuxt-link>
              <!-- <nuxt-link v-else to="/login ">已有账号？点击登录</nuxt-link> -->
            </p>

            <ul class="error-messages">
              <template v-for="(messages, field) in errors">
                <li v-for="(message, index) in messages" :key="index">{{field}} {{message}}</li>
              </template>
            </ul>

            <form @submit.prevent="onSubmit">
              <fieldset v-if="!isLogin" class="form-group">
                <input
                  v-model="user.username"
                  required
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="昵称"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="user.email"
                  required
                  class="form-control form-control-lg"
                  type="email"
                  placeholder="邮箱"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="user.password"
                  required
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="密码"
                  minlength="8"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">{{isLogin?"登录(sign in)":"注册"}}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { login, register } from "@/api/user";
  const Cookie = process.client ? require('js-cookie') : undefined

  export default {
    name: "",
    middleware:'notAuthenticated',
    components: {},
    data() {
      return {
        user: {
          email: "1138476744@qq.com",
          password: "czwwwwwwwwww",
          username: "我",
        },
        errors: {}, //错误信息
      };
    },
    // isLogin
    computed: {
      isLogin() {
        return this.$route.name === "login";
      },
    },
    watch: {},
    created() {},
    methods: {
      async onSubmit() {
        try {
          let { data } = this.isLogin
            ? await login({ user: this.user })
            : await register({ user: this.user });


          // 保存登录状态
          this.$store.commit("setUser", data.user);

          //数据持久化
          Cookie.set('user',data.user)

          this.$router.push("/");
        } catch (err) {
          this.errors = err.response.data.errors;
        }
      },
    },
  };
</script>
<style>
</style>