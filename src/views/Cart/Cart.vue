<template>
  <div>
    <div class="left">
      <div
        class="options"
        :class="[currents == 1 ? 'active' : '']"
        @click="toScroll(1)"
      >
        系统
      </div>
      <div
        class="options"
        :class="[currents == 2 ? 'active' : '']"
        @click="toScroll(2)"
      >
        规格
      </div>
      <div
        class="options"
        :class="[currents == 3 ? 'active' : '']"
        @click="toScroll(3)"
      >
        网络
      </div>
      <div
        class="options"
        :class="[currents == 4 ? 'active' : '']"
        @click="toScroll(4)"
      >
        打印机
      </div>
      <div
        class="options"
        :class="[currents == 5 ? 'active' : '']"
        @click="toScroll(5)"
      >
        消息与隐私
      </div>
      <div
        class="options"
        :class="[currents == 6 ? 'active' : '']"
        @click="toScroll(6)"
      ></div>
      <div>
        <div class="title">系统</div>
        <div class="title">常规</div>
        <div class="title">网络</div>
        <div class="title">打印机</div>
        <div class="title">消息与隐私</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  methods: {
    btnClick() {
      console.log('检测中')
    },
    data() {
      return {
        currents: null
      }
    },
    toScroll(index) {
      this.currents = index
      // 用 class="scroll_title" 添加锚点
      let jump = document.querySelectorAll('.scroll_title')
      let scroll_content = document.querySelector('.scroll_content')
      let total = jump[index - 1].offsetTop - 223 //这里的223是我头部header的高度
      let distance = scroll_content.scrollTop //获取需要滚动的距离
      // 平滑滚动，时长500ms，每10ms一跳，共50跳
      let step = total / 50
      if (total > distance) {
        smoothDown()
      } else {
        let newTotal = distance - total
        step = newTotal / 50
        smoothUp()
      }
      function smoothDown() {
        if (distance < total) {
          distance += step
          scroll_content.scrollTop = distance
          setTimeout(smoothDown, 10)
        } else {
          scroll_content.scrollTop = total
        }
      }
      function smoothUp() {
        if (distance > total) {
          distance -= step
          scroll_content.scrollTop = distance
          setTimeout(smoothUp, 10)
        } else {
          scroll_content.scrollTop = total
        }
      }
    }
  }
}
</script>
<style scoped>
.left {
  position: fixed;
  top: 80px;
}
.options {
  border: 1px solid;
}
.title {
  width: 100%;
  height: 200px;
}
</style>
