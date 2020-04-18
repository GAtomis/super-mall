<template>
  <div>
    <div class="recommend">
      <div
        class="recommend-box"
        v-for="(item, index) of recommend"
        :key="index"
      >
        <a :href="item.link">
          <img :src="item.image" alt="" class="recommend-box-img" />
          <div class="recommend-box-title">{{ item.title }}</div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RecommendView',
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scope>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 0.5rem 0 1rem;
  font-size: 0.6rem;
  border-bottom: 0.4rem solid #eee;
}
.recommend-box {
  flex: 1;
}

.recommend-box-img {
  /* min-height: 80px; */
  height: 3.5rem;
  /* min-width: 80px; */
  width: 3.5rem;
  margin-bottom: 0.25rem;
}
</style>
