<template>
  <div>
    <van-swipe class="detail_swiper" autoplay="2000">
      <van-swipe-item v-for="(item, index) in detailSwiper" :key="index">
        <img :src="item" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'DetailSwiper',
  props: {
    detailSwiper: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.detail_swiper {
  width: 100vw;
  /* height: 6rem; */
}
.detail_swiper img {
  width: 100vw;
}
</style>
