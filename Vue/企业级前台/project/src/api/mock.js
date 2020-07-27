import Mock from 'mockjs'
import position from '@/api/serverData/position';
import index_entry from '@/api/serverData/index_entry'
import restaurants from '@/api/serverData/restaurants'

// 配置请求延时
Mock.setup({
  timeout: 1000
})

Mock.mock('/api/position',position)
Mock.mock('/api/index_entry',index_entry)
Mock.mock('/api/restaurants',restaurants)


//直接使用字符串匹配
// Mock.mock('/api/userInfo', {
//   username: '尤雨溪',
//   age: 18
// })


// 正则匹配
// Mock.mock(/\/api\/user/ig, {
//   username: '正则'
// })



// 随机
// Mock.mock('/index', {
//   username: '正则',
//   "updateTime": "@datetime",  //时间
//   "score|1-800": 800, //1-800
//   "rank|1-100": 100,
//   "nickname": "@cname",
//   "image": "@image('200x100')",
//   'email': '@email'
// })


Mock.mock(/\/api\/user/ig, {
  'data|4-8': [
    {
      id: '@id',
      title: '@title',
      namespace: 'desctab',
      content: '@paragraph',
      isPublish: '@boolean',
      createTime: '@datetime',
      'fileList|1-10': [{
        name: '@integer(1,960)',
        uid: '-@name',
        image: '@image',
        status: 'done',
      }],
    },
  ],
})



let Random = Mock.Random;
let productData = () => {
  let productList = []; // 存放农机信息的数组
  for (let i = 0; i < 100; i++) {
    let product = {
      name: Random.ctitle(5, 9),
      img: Random.dataImage('125x125', '农机' + Random.integer(1, 100)),
      price: Random.integer(1000, 10000),
      owner: Random.cname()
    };
    productList.push(product);
  }
  return productList;
};
Mock.mock('http://www.czw.com/getVarietyItem', productData);







