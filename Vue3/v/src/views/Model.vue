<template>
  <div>
    <button @click="modelOpen=true">弹出模态框</button>
    <!--  -->
    <teleport to="body">
      <div v-if="modelOpen" class="modal">
        <h1>模态框</h1>
        <button @click="modelOpen=false">关闭</button>
      </div>
    </teleport>
  </div>
</template>

<script>
  import { reactive } from "vue";
  export default {
    setup() {
      return reactive({ modelOpen: false });
    },
  };
</script>

<style scoped>
.modal{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 15vh;
  height: 15vh;
  text-align: center;
  background: #ccc;
}
</style>
