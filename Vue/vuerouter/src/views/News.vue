<template>
  <div>
    <h2>数据{{msg}}</h2>
    {{$route.params.id}}
    <router-link to='/'>跳转</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: "1",
      };
    },
    mounted() {},
  };
</script>

<style scoped>
</style>