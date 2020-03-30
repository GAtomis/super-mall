<template>
  <div>
      
    <swiper>
        <van-swipe-item v-for="(item, index) in banner" :key="index">
            <div class="vsi-box">
            <a :href="item.link"><img  class="slide-img" :src="item.image" /></a>
            </div>
        </van-swipe-item>
    </swiper>

  </div>
</template>
<script>
import swiper from 'components/common/vant-swiper/swiper'
export default {
  name: 'HomeSwiper',
  data() {
    return {}
  },
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    swiper
  }
}
</script>
<style scope>
/* 轮播样式会迁移走 */
.slide-img {
  width: 100%;
}
/* 轮播样式会迁移走 */
.vsi-box {
  /* 防止抖动模式 */
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 52%;
  position: relative;
}
</style>