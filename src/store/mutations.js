// import { ADD_CART } from './actions_type'
import {
    ADD_COUNTER,
    ADD_TO_CART,
    SINGLE_SELECT_GOODS,
    ALL_SELECT_GOODS,
    DELETE_CART,
    SELECT_CLEAN
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
    [DELETE_CART](state, payload) {
        const cartList = state.cartList;
        const length = state.cartList.length

        for (let i = length - 1; i >= 0; i--) {
            if (
                cartList[i].goodsId === payload.goodsId &&
                cartList[i].selectedSkuComb.id === payload.selectedSkuComb.id
            ) {
                cartList.splice(i, 1)
            }
        }
    },
    [SELECT_CLEAN](state) {

        const cartList = state.cartList;
        const length = state.cartList.length

        for (let i = length - 1; i >= 0; i--) {
            if (
                cartList[i].checked === true
            ) {
                cartList.splice(i, 1)
            }
        }
    }
}