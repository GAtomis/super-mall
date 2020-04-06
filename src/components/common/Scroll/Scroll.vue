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
  methods: {
    refresh() {
      console.log('Scroll组件刷新加载')

      this.Bscroll && this.Bscroll.refresh()
    },
    scrollTo(x, y, ms) {
      this.Bscroll && this.Bscroll.scrollTo(x, y, ms)
    },
    finishPullUp() {
      this.Bscroll && this.Bscroll.finishPullUp()
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

    //判读是否监听滑动函数
    if (this.probeType == 2 || this.probeType == 3) {
      this.Bscroll.on('scroll', position => {
        // 判断滑动事件给父组件传值
        this.$emit('ByScroll', position)
      })
    }
    //是否设置下拉动作
    if (this.pullUpLoad) {
      this.Bscroll.on('pullingUp', () => {
        //bscroll下拉加载监听函数
        console.log('下拉加载中')
        this.$emit('pullingUp')
        // this.finishPullUp()
      })
    }
  }
}
</script>
<style scope>
</style>