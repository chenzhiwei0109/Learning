/* 
Suspense   <!-- 解决获取数据在不同时刻的展示问题 -->

teleport 传送门

 */
<template>
  <div>
    <Suspense>
      <template #default>
        <Create @handlePlan="handlePlan"></Create>
      </template>
      <template #fallback>
        <div>loading</div>
      </template>
    </Suspense>
  </div>
</template>
<script>
  import { reactive, toRefs, watch, computed } from "vue";

  import Create from "./Create";
  export default {
    components: {
      Create,
    },
    setup() {
      const handlePlan = (plan) => {
        console.log(plan.date);
      };
      return {
        handlePlan,
      };
    },
  };
</script>
