<template>
  <div>
    <van-tabs v-model="active" @change="change">
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
  },
  methods: {
    change(n, t) {
      console.log(n, t)
    }
  }
}
</script>
<style scope >
</style>