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
export class Goods {
    constructor(title, price, columns, services) {
        this.title = title
        this.newPrice = price.newPrice
        this.oldPrice = price.oldPrice
        this.discount = price.discount
        this.columns = columns
        this.services = services
    }
}