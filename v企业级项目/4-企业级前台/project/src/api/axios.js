import axios from 'axios'
import config from '@/config'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.prod


class Request {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.queue = {}
  }
  // 设置配置配置
  getInsideConfig() {  //返回结果 {baseUrl,header}
    const config = {
      baseURL: this.baseUrl,
      headers: {
        // 全局请求头配置
      }
    }
    return config;
  }

  // 拦截 
  interceptors(instance) {

    // 拦截请求
    instance.interceptors.request.use((reqConfig) => {
      // 修改配置
      // console.log('拦截请求' , reqConfig)
      return reqConfig
    })

    // 拦截响应
    instance.interceptors.response.use((res) => {
      // console.log('拦截响应', res)
      return res.data
    }, err => {
      // 响应出问题
      console.log(err)
      return { error: '出错' }
    })


  }

  request(options) {
    const instance = axios.create();

    // 后面的会覆盖前面的
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }

}

const axiosObj = new Request(baseUrl)

export default axiosObj;