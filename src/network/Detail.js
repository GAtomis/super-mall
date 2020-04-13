import { request } from './axiosMain.js'
export function getDetail(id) {
    //配置封装网络请求的配置参数
    const config = {
        url: "/mock/DetailGoods.json",
        params: {
            id
        },
    }

    return request(config)
}