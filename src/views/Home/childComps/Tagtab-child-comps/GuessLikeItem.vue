<template>
  <div class="guess">
    <!-- <img :src="guessData.image" alt="" class="" /> -->
    <van-image lazy-load :src="guessData.image">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
      <template v-slot:error>加载失败</template>
    </van-image>
    <div class="guess-info">
      <p>{{ guessData.name }}</p>
      <span>{{ guessData.advert }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GuessLikeItem',
  props: {
    guessData: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style scope>
.guess {
  /* 这里是一个用定位处理标签，使用底部padding出来的空间来放置定位后的商品信息 */
  padding-bottom: 2.25rem;
  position: relative;
}
.guess-info {
  position: absolute;
  bottom: 0.25rem;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.guess img {
  width: 100%;
}
</style>
