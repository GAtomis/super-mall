import {
    ADD_COUNTER,
    ADD_TO_CART,
    ADD_CART,
    DELETE_CART,
    SELECT_CLEAN
} from './mutations_type'
export default {
    [ADD_CART](context, payload) {
        return new Promise(resolve => {
            let oldProduct = context.state.cartList.find(item => {
                return (
                    item.goodsId === payload.goodsId &&
                    item.selectedSkuComb.id === payload.selectedSkuComb.id
                )
            })
            if (oldProduct) {
                context.commit(ADD_COUNTER, { payload, oldProduct })
                resolve("重复添加^_^")
            } else {
                context.commit(ADD_TO_CART, payload)
                resolve("加入成功")
            }

        })

    },
    [DELETE_CART](context, payload) {
        context.commit(DELETE_CART, payload)
    },
    [SELECT_CLEAN](context) {
        context.commit(SELECT_CLEAN)
    }
}