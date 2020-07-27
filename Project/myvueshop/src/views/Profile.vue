<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="登录">
        <van-cell-group>
          <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="loginUsername"></van-field>
          <van-field
            label="密码"
            type="password"
            required
            clearable
            placeholder="请输入密码"
            v-model="loginPassword"
          ></van-field>
        </van-cell-group>
        <div>
          <van-button
            :loading="loginLoading"
            loading-text="登录中"
            @click="loginHandler"
            type="primary"
            size="large"
          >登录</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="registUsername"></van-field>
          <van-field
            label="密码"
            type="password"
            required
            clearable
            placeholder="请输入密码"
            v-model="registPassword"
          ></van-field>
        </van-cell-group>
        <div>
          <van-button @click="registHandler" type="primary" size="large">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
import { mapActions } from "vuex";
import { async } from "q";
export default {
  data() {
    return {
      active: 0,
      loginUsername: "",
      loginPassword: "",
      registUsername: "",
      registPassword: "",
      loginLoading: false
    };
  },
  methods: {
    ...mapActions(["loginAction"]),
    //登录处理方法
    loginHandler() {
      if (!this.loginUsername || !this.loginPassword) {
        this.$toast.fail("请输入用户名或密码");
      } else {
        this.loginLoading = true;
        axios({
          url: url.loginUser,
          method: "post",
          data: {
            userName: this.loginUsername,
            password: this.loginPassword
          }
        })
          .then(res => {
            console.log(res);
            if (res.data.code == 200) {
              // 模拟
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve();
                }, 1000);
              })
                .then(() => {
                  this.loginLoading = false;
                  this.$toast.success("登录成功");
                  // 保存登录状态
                  this.loginAction(res.data.userInfo);
                  this.$router.go(-1);
                })
                .catch(err => {
                  this.$toast.fail("登录失败");
                });
            } else {
              this.loginLoading = false;
              this.$toast.fail("用户名未注册");
            }
          })
          .catch(err => {
            this.$toast.fail("登录失败");
          });
      }
    },
    // 注册的处理方法
    registHandler() {
      if (this.registUsername == "" || this.registPassword == "") {
        this.$toast.fail("请输入用户名或密码");
      } else {
        axios({
          url: url.registUser,
          method: "post",
          data: {
            userName: this.registUsername,
            password: this.registPassword
          }
        })
          .then(res => {
            console.log(res);
            if (res.status == 200) {
              new Promise((resolve, reject) => {
                this.$toast.success("注册成功");
                setTimeout(() => {
                  this.registUsername = this.registPassword = "";
                  resolve();
                }, 1000);
              }).then(res => {
                this.active = -1;
              });
            } else {
              this.$toast.fail("注册失败");
            }
          })
          .catch(err => {
            console.log(err);
            this.$toast.fail("注册失败了");
          });
      }
    }
  }
};
</script>

<style lang="scss">
</style>

