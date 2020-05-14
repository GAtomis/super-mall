<template>
  <div class="cart-views">
    <!-- 初始导航栏 -->

    <cart-title-bar></cart-title-bar>
    <div class="cart-wrapper">
      <div class="cart-tab">
        <div class="goods-box" v-for="(item, index) of cartList" :key="index">
          <van-swipe-cell>
            <van-card
              :num="item.selectedNum"
              :price="
                ((item.selectedSkuComb.price * item.selectedNum) / 100).toFixed(
                  2
                )
              "
              :desc="'剩余库存:' + item.selectedSkuComb.stock_num + '件'"
              :title="item.title"
              class="goods-card"
              thumb="https://s5.mogucdn.com/mlcdn/c45406/170404_6d94c1i457lg7e58djfgc08d19k31_640x960.jpg"
            >
              <template #tags>
                <van-tag color="#f2826a" plain round>{{
                  item.selectedSkuComb.s1
                }}</van-tag>

                <van-tag color="#f2826a" plain round>{{
                  item.selectedSkuComb.s2
                }}</van-tag>
              </template>
              <template #footer>
                <div class="cart-footer">
                  <van-checkbox
                    v-model="item.checked"
                    @click="cbtnClick(item)"
                    @change="singleClickChange"
                  />

                  <van-stepper
                    :max="item.selectedSkuComb.stock_num"
                    min="1"
                    v-model="item.selectedNum"
                    integer
                  />
                </div>
              </template>
            </van-card>
            <template #right>
              <van-button
                square
                text="删除"
                type="danger"
                class="delete-button"
                @click="deleteClick(item)"
              />
            </template>
          </van-swipe-cell>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

import {
  SINGLE_SELECT_GOODS,
  DELETE_CART,
  CART_LENGTH,
  CART_LIST
} from 'store/mutations_type.js'
import CartTitleBar from './CartTitleBar'
export default {
  name: 'CartViews',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      length: CART_LENGTH,
      cartList: CART_LIST,
      deleteCart: DELETE_CART
    }),
    toggle() {
      /* this.length ? this.cartList[0 ].selectedSkuComb.price : 0 */
      if (this.length) {
        return Number(
          this.cartList
            .filter(item => {
              return item.checked
            })
            .reduce((total, item) => {
              return (
                total + item.selectedSkuComb.price.toFixed(2) * item.selectedNum
              )
            }, 0)
        )
      } else {
        return 0
      }
    }
  },
  components: {
    CartTitleBar
  },
  methods: {
    cbtnClick(item) {
      // console.log(item)
      // item.checked = !item.checked
      this.$store.commit(SINGLE_SELECT_GOODS, item)
      // console.log(item.checked)
    },
    singleClickChange() {
      this.$emit('change')
    },
    deleteClick(item) {
      this.$store.dispatch(DELETE_CART, item)
    }
  }
}
</script>
<style lang="less" scoped>
.cart-view {
  position: absolute;
  top: 0;
  bottom: 4.9rem;
  width: 100%;
  // overflow-y: auto;

  .cart-wrapper {
    margin: 0.6rem 0.6rem 0 0.6rem;
    .cart-tabs {
      .goods-box {
        margin-bottom: 1rem;
      }
    }
  }
}
.delete-button {
  height: 100%;
}
.cart-footer {
  display: flex;
  justify-content: space-between;
}
</style>
