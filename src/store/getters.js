import { CART_LENGTH, CART_LIST, IS_ALL_SELECT } from './mutations_type'
export default {
    [CART_LENGTH](state) {
        return state.cartList.length
    },
    [CART_LIST](state) {
        return state.cartList
    },
    [IS_ALL_SELECT](state) {
        state.cartList.every(item => {
            return item.checked === true
        })

        return state.cartList.every(item => {
            return item.checked === true
        })
    }
}