<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  //外框架成型
  name: 'Tabbar',
  data() {
    return {}
  },
  components: {}
}
</script>
<style scoped>
.tab-bar {
  display: flex;
  background: #fff;
  height: 2.45rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 14;
}
</style>
