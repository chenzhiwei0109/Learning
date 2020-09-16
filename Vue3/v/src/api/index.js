import {request} from '@/utils/axios'
export function getPlanList(){
  return request({url:'/plan',methods:'get'})
}

export function addPlan(data){
  return request({url:'/plan',method:'post',data})
}

export function delPlan(id){
  return request({url:'/plan',method:'delete',params:{id}})
}
