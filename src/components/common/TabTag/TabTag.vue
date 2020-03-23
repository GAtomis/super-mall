<template>
  <div>
    <van-tabs v-model="active">
      <slot></slot>
    
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>
<style scope >
</style>