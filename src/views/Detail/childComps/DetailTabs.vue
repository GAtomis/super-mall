<template>
  <div>
    <div class="wrapper">
      <div
        v-for="(item, index) of title"
        :key="index"
        class="content"
        @click="tabClick(index)"
        :class="{ active: currentIndex == index }"
      >
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailTabs',

  data() {
    return {
      title: ['宝贝', '详情', '评价', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    tabClick(index) {
      this.$emit('tabClick', index)
      this.currentIndex = index
    }
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  line-height: 2.2rem;
  height: 2.2rem;
  background: #fff;
  width: 100%;
}
.content {
  flex: 1;
  text-align: center;
}
.active {
  color: #ef232f;
}
</style>
