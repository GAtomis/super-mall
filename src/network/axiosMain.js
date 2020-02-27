import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    timeout: 5000
  })
  return instance(config)


}
export function request1(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //本体为primise
  return instance(config)
}

export function request2(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //拦截器概念
  //全局拦截器
  //instance实例对象 使用拦截器
  instance.interceptors.request.use(config => {
    /*********请求拦截作用 ********/

    //1.比如config中的一些信息不符合服务器的要求

    //2.比如每次发送网络请求时,都希望在鞋面显示一个请求图标

    //3.某些网络请求(比如登录（token），必须携带一些特殊的信息)

    console.log("success", config);
    return config

  }, err => {
    console.log("error", err);

  })
  instance.interceptors.response.use(res => {
    // console.log("拦截响应成功", res);  
    return res.data

  }, err => {
    console.log("拦截响应失败", err);

  })

  return instance(config)

}

