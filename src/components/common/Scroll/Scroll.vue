<template>
  <div ref="wrapper" class="wrapper" >
    <div class="content">
      <slot></slot>
    </div>
    
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  data() {
    return {
      Bscroll: null
    }
  },
  mounted() {
    this.Bscroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      click: true
    })
  }
}
</script>
<style scope>
</style>