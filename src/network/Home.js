import { request2 } from './axiosMain.js'

export function getHomeData() {
  //配置封装网络请求的配置参数
  const config = {
    url: '/home/multidata'
  }
  return request2(config)
}