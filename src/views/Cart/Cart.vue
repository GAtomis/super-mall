<template>
  <div id="cart">
    <!-- 导航栏 隐藏可见-->
    <cart-nav-bar
      v-show="showAbs"
      :style="opacityStyle"
      class="nav-comp"
      :controlSwitch="controlSwitch"
    ></cart-nav-bar>
    <!-- 管理的隐藏按钮用于确认移除的操作按钮 -->
    <transition name="van-fade">
      <van-button
        type="danger"
        @click="SelectClean"
        class="cart-switch"
        v-show="controlSwitch"
        >确认移除</van-button
      >
    </transition>

    <!-- 可滚动区域 -->

    <van-list class="cart-view">
      <!-- 购物车内商品展示 -->
      <cart-views @change="change" :controlSwitch="controlSwitch" />
      <!-- 当购物车为空的时候的展位提示元素 -->
      <van-empty description="购物车竟然还是空哟~" v-if="!length">
        <template #image>
          <van-image src="http://210.22.130.90:17080/img/cart-empty.png" />
        </template>
        <van-button
          round
          color="linear-gradient(to right,#ff6034,#ee0a24)"
          class="bottom-button"
        >
          去看看
        </van-button>
      </van-empty>
    </van-list>
    <!-- 结算栏 -->
    <van-submit-bar
      :price="toggle"
      button-text="提交订单"
      @submit="onSubmit"
      class="submit-bar"
      :disabled="controlSwitch || !length"
    >
      <van-checkbox @click="checkClick" v-model="allChecked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
//工具类 暂无

/* 引入Vuex */
import { mapGetters } from 'vuex'
//再使用vuex中使用名称统一格式
import {
  CART_LENGTH /* cart中商品list长度 */,
  CART_LIST /* 商品list数组 */,
  IS_ALL_SELECT /* 判断是否全选的方法  */,
  ALL_SELECT_GOODS /* 进行全选的方法 */,
  SELECT_CLEAN /* 选中删除方法 */
} from 'store/mutations_type.js'

//子组件引入
import CartNavBar from './childComps/CartNavBar'
import CartViews from './childComps/CartViews'

export default {
  data() {
    return {
      opacityStyle: {
        //navbar透明度style属性
        opacity: 0
      },
      showAbs: false, //是否显示navBar
      allChecked: false, //选线按钮默认值
      controlSwitch: false //管理按钮默认值
    }
  },
  computed: {
    //通过扩展运算符展开所有vuexGetters里定义的获取方法并且重新附上变量名称
    ...mapGetters({
      length: CART_LENGTH,
      cartList: CART_LIST,
      isAll: IS_ALL_SELECT
    }),
    //结算栏中总计收入的计算
    toggle() {
      if (this.length) {
        //函数通过先判断购物车内数据长度，后过滤掉没选中商品，对选中的商品返回一个新数组
        //并且进行累加操作 后对取小数点后两位
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
    // scroll

    // CartTitleBar
  },
  activated() {
    //监听滑动函数
    window.addEventListener('scroll', this.handleScroll)
  },
  created() {
    // 监控滑动
    // window.addEventListener('scroll', this.handleScroll)
    this.$nextTick(this.change)
    //事件总线，由于两个非父子组件需要管理这个按钮通过事件总线最方便完成
    this.$bus.$on('controlClick', this.controlClick)
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.scroll = new BScroll(this.$refs.wrapper, {})
    // })
  },
  deactivated() {
    //非活跃取消监听事件
    window.removeEventListener('scroll', this.handleScroll)
  },

  destroyed() {
    //销毁也同样取消
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    //narBar是否透明的判断方法
    handleScroll() {
      //取页面视口距离顶部的高度
      const top =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop

      const Offset = 30 //偏移量为了效果看起来比较舒服
      if (top > Offset) {
        let opacity = (top - Offset) / 44
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = true
      } else if (top == 0) {
        this.showAbs = false
      }
    },
    //全选按钮方法
    checkClick() {
      this.$store.commit(ALL_SELECT_GOODS, !this.allChecked)
    },
    //结算按钮方法
    onSubmit() {},
    //当单个选择按钮点击时判断一次全选按钮是否需要改变
    change() {
      this.allChecked = this.length === 0 ? false : this.isAll
    },
    //判断管理按钮开关方法
    controlClick() {
      this.controlSwitch = !this.controlSwitch
    },
    //删除方法选中元素方法
    SelectClean() {
      this.$store.dispatch(SELECT_CLEAN)
    }
  },
  watch: {
    //监听长度变化或者cartList也是可以的
    length() {
      console.log('长度监听')
      // this.$refs.scroll.refresh()

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
  .cart-switch {
    position: fixed;
    bottom: 2.5rem;
    z-index: 999;
    right: 0.8rem;
    width: 5.5rem;
  }

  .cart-view {
    position: absolute;
    top: 0;
    bottom: 4.9rem;
    width: 100%;
    .bottom-button {
      width: 7rem;
    }
  }
  .nav-comp {
    background-color: #ffffff;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9;
  }
}

.delete-button {
  height: 100%;
}
</style>
