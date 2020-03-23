import { request2, request, request3 } from './axiosMain.js'
//导出轮播图接口数据
export function getHomeData() {
    //配置封装网络请求的配置参数
    const config = {
        url: '/home/multidata'
    }
    return request2(config)
}
//导出请求类型的数据，假数据需要接口化
export function getRankList() {
    const config = {
        url: "/mock/ajax.json",
    }

    return request(config)

}
//导出请求商品详情数据
export function getGoods(type, page) {
    const config = {
        url: "/supermall/RankIcon",
        params: {
            type,
            page
        },
        method: "post"
    }
    return request3(config);
}