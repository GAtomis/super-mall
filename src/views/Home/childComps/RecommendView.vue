<template>
  <div>
      <div class="recommend">
          <div class="recommend-box" v-for="(item,index) of recommend" :key="index" >
              <a :href="item.link">
                <img :src="item.image" alt="" class="recommend-box-img">
                <div class="recommend-box-title">{{item.title}}</div>
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
  padding: 10px 0 20px;
  font-size: 12px;
  border-bottom: 8px solid #eee;
}
.recommend-box {
  flex: 1;
}

.recommend-box-img {
  /* min-height: 80px; */
  height: 70px;
  /* min-width: 80px; */
  width: 70px;
  margin-bottom: 5px;
}
</style>