import { request3 } from './axiosMain.js'
export function getDetailData(id) {
    //配置封装网络请求的配置参数
    const config = {
        url: '/home/multidata',
        params: {
            id
        },
        method: 'post'
    }
    return request3(config)
}