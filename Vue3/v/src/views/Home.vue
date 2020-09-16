<template>
  <div class="home">
    <Suspense>
      <template #default>
        <a-list item-layout="horizontal" :data-source="planList">
          <template v-slot:renderItem="{ item}">
            <a-list-item>
              <a-list-item-meta :description="item.content">
                <template v-slot:title>时间:{{formatDate(item.date)}}</template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </a-list>
      </template>
      <template #fallback>
        <div>loading</div>
      </template>
    </Suspense>

    <div>模态框</div>
<Model></Model>
  </div>
</template>

<script>
  import { onErrorCaptured, onMounted, toRefs } from "vue";
  // @ is an alias to /src
  import moment from "moment";
  import { useStore } from "vuex";
  import * as types from "@/store/action-types.js";
  import Model from './Model.vue'
  export default {
    name: "Home",
    components: {Model},
    setup() {
      const store = useStore();

      // store.dispatch
      onMounted(() => {
        store.dispatch(types.SET_PLAN_LIST);
      });
      const formatDate = (val) => {
        return moment(val).format("YYYY-MM-DD");
      };

      // onErrorCaptured(e=>{

      // })

      return {
        ...toRefs(store.state),
        formatDate,
      };
    },
  };
</script>
