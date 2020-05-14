import {
    ADD_COUNTER,
    ADD_TO_CART,
    ADD_CART,
    DELETE_CART,
    DELETE_ITEM
} from './mutations_type'
export default {
    [ADD_CART](context, payload) {
        let oldProduct = context.state.cartList.find(item => {
            return (
                item.goodsId === payload.goodsId &&
                item.selectedSkuComb.id === payload.selectedSkuComb.id
            )
        })
        if (oldProduct) {
            context.commit(ADD_COUNTER, { payload, oldProduct })
        } else {
            context.commit(ADD_TO_CART, payload)
        }
    },
    [DELETE_CART](context, payload) {
        context.commit(DELETE_ITEM, payload)
    }
}