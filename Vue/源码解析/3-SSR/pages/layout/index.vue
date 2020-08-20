<template>
  <div>
    <nav class="navbar navbar-light">
      <div class="container">
        <!-- <a class="navbar-brand" href="index.html">conduit</a> -->
        <nuxt-link to="/" class="navbar-brand">conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link" exact>首页</nuxt-link>
          </li>
          <template v-if="user">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/editor">
                <i class="ion-compose"></i>&nbsp;发帖
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/settings">
                <i class="ion-gear-a"></i>&nbsp;设置
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/profile/123">
                <img
                  class="user-pic"
                  src="user.image"
                />
                {{user.username}}
              </nuxt-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/login">登 录</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/register">注 册</nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </div>
</template>
        
        </ul>
      </div>
    </nav>

    <!-- 路由 -->
    <nuxt-child></nuxt-child>
    <!-- 路由 -->

    <!-- 底部 -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    name: "layoutIndex",
    components: {},
    data() {
      return {};
    },
    computed: {
      ...mapState(["user"]),
    },
    watch: {},
    created() {},
    methods: {},
  };
</script>
<style>
</style>