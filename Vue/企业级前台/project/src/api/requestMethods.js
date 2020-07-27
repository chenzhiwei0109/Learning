import axios from '@/api/axios'

export const getBannerData = () => {
  return axios.request({
    url: 'index/banner',
    method: 'get'
  })
}


export const getUserData = () => {
  return axios.request({
    url:'userInfo',
    method:'get'
  })
}

export const getUserName = () => {
  return axios.request({
    url:'userName',
    method:'get'
  })
}

export const getPositionData = ()=>{
  return axios.request({
    url:'position',
    method:'get'
  })
}

export const getIndexEntryData = () =>{
    return axios.request({
        url:"index_entry",
        method:"get"
    })
}

export const getRestaurantsData = () =>{
    return axios.request({
        url:"restaurants",
        method:"get"
    })
}