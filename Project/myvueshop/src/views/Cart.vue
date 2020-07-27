<template>
  <div>
    <van-nav-bar title="购物车" fixed />
    <div class="container">
      <van-card
        class="card"
        v-for="(item, index) in productList"
        :key="index"
        num="1"
        :price="item.price"
        :desc="item.company"
        :title="item.name"
        :thumb="item.img"
      >
        <div slot="footer">
          <van-button size="mini" @click="delCart(item._id,index)">删除</van-button>
        </div>
      </van-card>
    </div>

    <van-submit-bar class="submit-bar" :price="totalPrice" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      productList: []
    };
  },
  computed: {
    ...mapState(["userInfo"]),
    totalPrice() {
      return  this.productList.reduce((sum, elem) => {
                sum += elem.price;
                return sum;
              }, 0)*100
      
    }
  },
  created() {
    //验证用户是否登录
    if (JSON.stringify(this.userInfo) === "{}") {
      this.$toast.fail({
        message: "请先登录",
        duration: 1200
      });
      setTimeout(() => {
        this.$router.push("./profile");
      }, 1200);
    } else {
      axios({
        url: url.getCart,
        method: "get",
        params: {
          userId: this.userInfo._id
        }
      })
        .then(res => {
          for (let item of res.data) {
            this.productList.push(item.productId);
          }
          console.log(JSON.parse(JSON.stringify(this.productList)));
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  methods: {
    onSubmit() {
      console.log(1);
    },
    delCart(id,index){
      // 删除数据库中的数据 如果删除成功, 进入回调函数 ,在回调函数里
      this.productList.splice(index,1);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 2rem;
  margin-top: 1rem;
}
.submit-bar {
  margin-bottom: 1rem;
}
</style>