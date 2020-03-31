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
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false
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
      click: true,
      //下拉加载是否开启
      pullUpLoad: this.pullUpLoad
    })
    this.Bscroll.on('scroll', position => {
      // 判断滑动事件给父组件传值
      this.$emit('ByScroll', position)
    })
    this.Bscroll.on('pullingUp', () => {
      //bscroll下拉加载监听函数
      // console.log('下拉加载中', position)
      this.$emit('pullingUp')
      this.Bscroll.finishPullUp()
    })
  }
}
</script>
<style scope>
</style>