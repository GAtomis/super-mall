import { request, request3 } from './axiosMain.js'
export function getDetail(id) {
    //配置封装网络请求的配置参数
    const config = {
        url: '/mock/DetailGoods.json',
        params: {
            id
        }
    }

    return request(config)
}
export function getRecommend(type, page) {
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
export class shopInfo {
    constructor(res) {
        // this.shopInfo=id1.shopInfo
        const topInfo = [res.cFans, res.cGood, res.cSell]
            // console.log(topInfo)

        const newArray = topInfo.map(r => {
                return {
                    ...r,
                    k: r.title
                }
            })
            // console.log({ topinfo: newArray })

        this.info = { topInfo: newArray, bottomInfo: res.bottom_info }
        console.log(this.info)

        this.name = res.title

        this.logo = res.shopLogURL
    }
}