<template>
  <div id="nav">
    <a-layout id="components-layout-demo-fixed">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <div class="logo" />
        <a-menu
          theme="dark"
          mode="horizontal"
          v-model:selectedKeys="selectedKeys"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="/">
            <router-link to="/">首页</router-link>
          </a-menu-item>
          <a-menu-item key="/plan">
            <router-link to="/plan">计划表</router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
        <a-row>
          <a-col :span="6">
            <a-card title="总时长" style="width: 100%;">
              <p>{{totalTime}}小时</p>
            </a-card>
          </a-col>
          <a-col :span="16" :offset="2">
            <router-view></router-view>
          </a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script>
  import { reactive, toRefs, watch, computed } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { useStore } from "vuex";
  export default {
    setup(props, context) {
      const route = useRoute();
      const store = useStore();
      //props就是父组件传递的值，
      //context.attrs context.slots context.emit 可以进行父子传值
      // 没有this

      // reactive就是Vue.observable(),为了避免命名冲突
      const state = reactive({
        // 方法2计算属性响应路由变化
        selectedKeys: computed(() => [route.path]),

        totalTime: store.getters.totalTime,
      });

      //方法1 watch响应属性变化
      // watch(
      //   () => route.path,
      //   (newVal) => {
      //     state.selectedKeys = [newVal];
      //   },
      //   { immediate: true }
      // );

      setTimeout(() => {
        state.a = "2";
      }, 2000);

      return {
        ...toRefs(state),
      };
    },
  };
</script>
<style>
</style>
