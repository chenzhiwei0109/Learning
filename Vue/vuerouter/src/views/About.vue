<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goNews"></button>
  </div>
</template>
<script>
  export default {
    methods: {
      goNews() {
        this.$router.push({
          path:'/'
        })
      },
    },

    beforeRouteEnter (to, from, next) {
      console.log('组件路由进入前')
    },
    beforeRouteUpdate(){
      //路由被复用的情况下用。只是传参不同时。 article/123 =>article/456
    },
    beforeRouteLeave (to, from, next) {
      
    }

  };
</script>