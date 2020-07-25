<template>
  <div>
    <div :style="styleObj">{{num}}</div>
    <button  @mousedown="num++">点击</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num: 1,
        styleObj:{}
      };
    },
    watch: {
      /* eslint-disable */
      num(newValue, oldValue) {
        if (newValue > 10) {
          this.styleObj = {
            fontSize:newValue+'px'
          }
        }
      },
    },
  };
</script>
<style>
</style>