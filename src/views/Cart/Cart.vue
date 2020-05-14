<template>
  <div id="cart">
    <!-- 导航栏 隐藏可见-->
    <cart-nav-bar
      v-show="showAbs"
      :style="opacityStyle"
      class="nav-comp"
    ></cart-nav-bar>

    <!-- 可滚动区域 -->

    <cart-views class="cart-view" @change="change" />
    <!-- 结算栏 -->
    <van-submit-bar
      :price="toggle"
      button-text="提交订单"
      @submit="onSubmit"
      class="submit-bar"
    >
      <van-checkbox v-model="allChecked">全选</van-checkbox>
    </van-submit-bar>
    <!-- 结算栏 -->
    <van-submit-bar
      :price="toggle"
      button-text="提交订单"
      @submit="onSubmit"
      class="submit-bar"
    >
      <van-checkbox @click="checkClick" v-model="allChecked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
// 引入Vuex
import { mapGetters } from 'vuex'
import {
  CART_LENGTH,
  CART_LIST,
  IS_ALL_SELECT,
  ALL_SELECT_GOODS
} from 'store/mutations_type.js'

//子组件引入
import CartNavBar from './childComps/CartNavBar'
import CartViews from './childComps/CartViews'
// import CartTitleBar from './childComps/CartTitleBar'
export default {
  data() {
    return {
      opacityStyle: {
        opacity: 0
      },
      showAbs: true,
      allChecked: false
    }
  },
  computed: {
    ...mapGetters({
      length: CART_LENGTH,
      cartList: CART_LIST,
      isAll: IS_ALL_SELECT
    }),

    toggle() {
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
    CartNavBar,
    CartViews
    // CartTitleBar
  },

  created() {
    // 监控滑动
    window.addEventListener('scroll', this.handleScroll)

    this.$nextTick(this.change)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const top =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      //
      if (top > 0) {
        let opacity = top / 44
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = true
        console.log(opacity)
      } else if (top == 0) {
        this.showAbs = false
      }
    },
    checkClick() {
      this.$store.commit(ALL_SELECT_GOODS, !this.allChecked)
    },
    onSubmit() {},
    change() {
      // console.log(this.isAll)

      this.allChecked = this.length === 0 ? false : this.isAll
    }
  },
  watch: {
    length() {
      console.log('长度监听')

      this.change()
    }
  }
}
</script>

<style lang="less" scoped>
#cart {
  height: 100vh;
  position: relative;
  .submit-bar {
    position: fixed;
    bottom: 2.4rem;
    left: 0;
    z-index: 100;
    width: 100%;
    background-color: #fff;
    -webkit-user-select: none;
    user-select: none;
  }

  .nav-comp {
    background-color: #ffffff;
    // color: #000;
    width: 100%;
    position: fixed;
    left: 0;
    // right: 0;
    top: 0;
    z-index: 9;
  }
  /*   .cart-view {
    position: absolute;
    top: 0;
    bottom: 4.9rem;
    width: 100%;
    overflow-y: auto;

    .cart-wrapper {
      margin: 0.6rem 0.6rem 0 0.6rem;
      .cart-tabs {
        .goods-box {
          margin-bottom: 1rem;
        }
      }
    }

    .nav-comp {
      background-color: #ffffff;
      // color: #000;
      width: 100%;
      position: fixed;
      left: 0;
      // right: 0;
      top: 0;
      z-index: 9;
    }
  } */
}

.delete-button {
  height: 100%;
}
</style>
