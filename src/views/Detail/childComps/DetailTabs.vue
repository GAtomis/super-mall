<template>
  <div>
    <div class="wrapper">
      <div v-for="(item, index) of title" :key="index" class="content">
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
      title: ['宝贝', '详情', '评价', '推荐']
    }
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  line-height: 44px;
  height: 44px;
  background: #fff;
  width: 100%;
}
.content {
  flex: 1;
  text-align: center;
}
</style>
