<template>
  <!-- 页面作用整个猜你喜欢标签布局 -->
  <div class="GL-wrap">
    <guess-item
      v-for="(item, index) of popsArray"
      :key="index"
      :guessData="item"
    />
  </div>
</template>
<script>
import GuessItem from './GuessLikeItem'
export default {
  name: 'GuessLike',
  components: {
    GuessItem
  },
  props: {
    guessData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      popsArray: this.guessData.list
    }
  }
}
</script>
<style scope>
/* 猜你喜欢样式 */
.GL-wrap {
  display: flex;
  flex-direction: column;
  margin: 0 0.25rem;
}
</style>
