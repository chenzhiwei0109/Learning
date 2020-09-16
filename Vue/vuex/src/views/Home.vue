<template>
  <div>
    {{$_store.state.num}}
    {{$_store.getters.comp}}
    <button @click ='add'>加</button>
  </div>
</template>

<script>
  export default {
    methods: {
      add(){
        this.$_store.commit('add',1)
      }
    },
  };
</script>

<style scoped>
</style>