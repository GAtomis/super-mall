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
  background: #f6f6f6;
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* z-index: 1; */
}
</style>