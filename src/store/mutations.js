// import { ADD_CART } from './actions_type'
import {
    ADD_COUNTER,
    ADD_TO_CART,
    SINGLE_SELECT_GOODS,
    ALL_SELECT_GOODS,
    DELETE_ITEM
} from './mutations_type'
export default {
    [ADD_COUNTER](state, obj) {
        obj.oldProduct.selectedNum += obj.payload.selectedNum
    },
    [ADD_TO_CART](state, payload) {
        payload.checked = true
        state.cartList.push(payload)
    },
    [SINGLE_SELECT_GOODS](state, payload) {
        state.cartList.forEach(item => {
            if (
                item.goodsId === payload.goodsId &&
                item.selectedSkuComb.id === payload.selectedSkuComb.id
            ) {
                item.checked = !item.checked
                    // console.log(state.cartList[index].checked)
            }
        })
    },
    [ALL_SELECT_GOODS](state, payload) {
        state.cartList.forEach(item => {
            item.checked = payload
        })
    },
    [DELETE_ITEM](state, payload) {
        state.cartList.forEach((item, index, array) => {
            if (
                item.goodsId === payload.goodsId &&
                item.selectedSkuComb.id === payload.selectedSkuComb.id
            ) {
                array.splice(index, 1)
            }
        })
    }
}