<template>
  <div>
    <button @click="getUser">获取</button>
    {{$store.state.userInfo.name}}
  </div>
</template>

<script>
  export default {
    methods: {
      getUser() {
        this.$store.commit("user/getUserInfo", { name: "zs", age: "18" });
      },
    },
  };
</script>

<style scoped>
</style>