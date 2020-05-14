<template>
  <div class="detail_footer_bar">
    <van-goods-action class="zindex">
      <van-goods-action-icon
        icon="chat-o"
        text="客服"
        dot
        @click="onClickIcon"
      />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :badge="cartLength"
        @click="cartClick"
      />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
      <van-goods-action-button
        type="warning"
        @click="onClickButton"
        text="加入购物车"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="cartClick"
      />
    </van-goods-action>
  </div>
</template>
<script>
import { Toast } from 'vant'
export default {
  props: {
    cartLength: {
      type: Number,
      default() {
        return {}
      }
    }
  },
  name: 'DetailFooterBar',
  methods: {
    onClickIcon() {
      Toast('点击图标')
    },
    onClickButton() {
      this.$emit('cartClick')
    },
    cartClick() {
      Toast('购物车')
      this.$router.push({ name: 'Cart' })
    }
  }
}
</script>
<style scoped>
.zindex {
  z-index: 2;
}
</style>
