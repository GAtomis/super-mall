<template>
    
    <div class>
      <div class="tabbar"><h1>撑开的的面基</h1></div>
      <!-- <scroll class="wrapper"> -->
        <van-tabs v-model="active" sticky class="tabs">
          <van-tab title="标签 1">
            <div>内容一</div>
<div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div><div>内容一</div>

          </van-tab>
          <van-tab title="标签 2">内容 2</van-tab>
          <van-tab title="标签 3">内容 3</van-tab>
          <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>
        <!-- </scroll> -->
    </div>
    
    
</template>
<script>
// import Scroll from 'components/common/Scroll/Scroll'
export default {
  name: 'Category',
  data() {
    return {
      active: 2
    }
  },
  components: {
    // Scroll
  }
}
</script>
<style scoped>
.wrapper {
  position: absolute;
  top: 50px;
  bottom: 50px;
  left: 0;
  right: 0;
}
/* .tabbar {
  position: fixed;
} */
/* .tabs {
  position: absolute;
  top: 50px;
  bottom: 50px;
  left: 0;
  right: 0;
} */
</style>