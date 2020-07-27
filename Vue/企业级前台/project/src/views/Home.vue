<template>
  <div>
  
    <List :shopListArr='shopListArr'></List>

  </div>
</template>

<script>
  /* eslint-disable */
  import {
    getPositionData,
    getIndexEntryData,
    getRestaurantsData,
  } from "@/api/requestMethods.js";
  import List from "@/components/List";

  export default {
    methods: {},
    data() {
      return {
        positionData: "",
        swiperList1: [],
        swiperList2: [],
        shopListArr: [],
      };
    },
    components: {
      List,
    },
    async mounted() {
      await getPositionData().then((res) => {
        this.positionData = res.name;
      });
      console.log(this.positionData);

      let res2 = await getIndexEntryData();

      this.swiperList1 = res2.slice(0, 8);
      this.swiperList2 = res2.slice(8, 16);

      console.log(this.swiperList1);
      console.log(this.swiperList2);
      await getRestaurantsData().then((res) => {
        this.shopListArr = res;
      });
      console.log(this.shopListArr);
    },
    methods: {
      onClickLeft() {
        this.$toast("返回");
      },
      onClickRight() {
        this.$toast("返回");
      },
    },
  };
</script>

<style scoped>
  .van-nav-bar {
    background: rgb(108, 108, 245);
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>