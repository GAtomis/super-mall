<template>
  <div
    class="cart-views"
    :style="{ 'padding-bottom': !this.length ? 0 : '5rem' }"
  >
    <!-- 初始导航栏 -->

    <cart-title-bar :controlSwitch="controlSwitch" />
    <div class="cart-box">
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
              class="goods-card van-ellipsis"
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
  props: {
    controlSwitch: Boolean
  },
  name: 'CartViews',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      length: CART_LENGTH,
      cartList: CART_LIST,
      deleteCart: DELETE_CART
    })
  },
  components: {
    CartTitleBar
  },
  methods: {
    //点击单个选择按钮触发事件
    cbtnClick(item) {
      this.$store.commit(SINGLE_SELECT_GOODS, item)
    },
    //按钮改变触发事件
    singleClickChange() {
      this.$emit('change')
    },
    //单个删除事件
    deleteClick(item) {
      item.switch = false
      setTimeout(() => {
        this.$store.dispatch(DELETE_CART, item)
      }, 500)
    }
  }
}
</script>
<style lang="less" scoped>
.cart-views {
  // padding-bottom: 4.9rem;
  .cart-box {
    .cart-tabs {
      // margin-bottom: 4.9rem;
      margin: 0.6rem 0.6rem 4.9rem 0.6rem;
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
