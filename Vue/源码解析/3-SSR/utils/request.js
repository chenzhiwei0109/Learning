import axios from 'axios'
// 创建实例，不污染全局对象

const request = axios.create({
  baseURL: 'https://conduit.productionready.io'
})
// 请求拦截
// 响应拦截


export default request;