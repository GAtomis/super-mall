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
  props: {
    probeType: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  name: 'scroll',
  data() {
    return {
      Bscroll: null
    }
  },
  mounted() {
    this.Bscroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true
    })
    this.Bscroll.on('scroll', position => {
      // 判断滑动事件给父组件传值
      this.$emit('ByScroll', position)
    })
  }
}
</script>
<style scope>
</style>