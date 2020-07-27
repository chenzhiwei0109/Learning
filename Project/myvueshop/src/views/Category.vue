<template>
  <div>
    <van-nav-bar title="商品类型"></van-nav-bar>
    <div class="category">
      <van-row>
        <van-col span="6" class="nav">
          <ul>
            <li
              @click="selectCategory(item.typeId, index)"
              :class="{active:active==index}"
              v-for="(item, index) in types"
              :key="index"
            >{{item.typeName}}</li>
          </ul>
        </van-col>
        <van-col span="18" class="container">
          <van-list
            class="content"
            v-model="loading"
            @load="onLoad"
            finished-text="没有更多了"
            :finished="finished"
          >
            <div
              @click="goDetail(item._id)"
              class="content-item"
              v-for="(item, index) in productList"
              :key="index"
            >
              <div class="img">
                <img :src="item.img" alt />
              </div>
              <p class="content-item-name">{{item.name}}</p>
              <p>￥{{item.price}}</p>
            </div>
          </van-list>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
export default {
  data() {
    return {
      active: 0,
      types: [], //存类型
      productList: [],
      typeId: 1,
      start: 0,
      limit: 10,
      loading: true,
      finished: false //是否取完
    };
  },
  created() {
    axios({
      url: url.getTypes,
      method: "get"
    })
      .then(res => {
        this.types = res.data;
        this.selectCategory(this.typeId, this.active);
      })
      .catch(err => {});
  },
  methods: {
    selectCategory(typeId, index) {
      this.active = index;
      this.typeId = typeId;
      this.productList = [];
      this.finished = false;
      this.getProductList();
    },
    getProductList() {
      this.loading = true;
      axios({
        url: url.getProductsByType,
        method: "get",
        params: {
          typeId: this.typeId,
          start: this.productList.length,
          limit: this.limit
        }
      })
        .then(res => {
          // 如果要取的数据是0时就不行
          if (res.data.length != 0) {
            this.productList = this.productList.concat(res.data);
          } else {
            this.finished = true;
          }
          this.loading = false;
        })
        .catch(err => {});
    },
    onLoad() {
      setTimeout(() => {
        this.getProductList();
      }, 1000);
    },
    goDetail(id) {
      this.$router.push(`/detail/${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  background-color: #eee;
  li {
    height: 0.6rem;
    line-height: 0.6rem;
    border-bottom: 1px solid #fff;
    padding: 3px;
    text-align: center;
  }
  .active {
    background: #ffffff;
  }
}
.container {
  position: fixed;
  top: 46px;
  bottom: 1.1rem;
  right: 0;
  overflow-y: scroll;
}
.content {
  display: flex;
  flex-wrap: wrap;
  //   padding-bottom: 1.1rem;
  &-item {
    width: 40%;
    padding: 0 10px;
    text-align: center;
    img {
      width: 2rem;
      height: 2rem;
    }
    &-name {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>