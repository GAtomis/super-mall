<template>
  <div class="tab-bar-items" @click="itemClick">
    <div v-if="isActive">
      <slot name="tab-bar-items-activeImg"></slot>
    </div>
    <div v-else>
      <slot name="tab-bar-items-img"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="tab-bar-items-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  props: {
    //前端跳转路由传值
    path: String,
    //活跃状态封装的颜色
    activeColor: {
      type: String,
      default: '#d81e06'
    }
  },
  data() {
    return {
      // isActive: false,
      myPath: this.path
    }
  },
  computed: {
    //路由是否活跃的值
    isActive() {
      return this.$route.path.indexOf(this.myPath) != -1
    },
    //通过计算属性封装传入样式显示活跃状态是文字的颜色
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    //点击标签路由跳转
    itemClick() {
      // console.log(!(this.$route.path==this.myPath))
      //
      if (this.$route.path != this.myPath) {
        this.$router.replace(this.myPath)
        // this.$router.push(this.myPath)
      }
    }
  }
}
</script>
<style scoped>
.tab-bar-items {
  flex: 1;
  text-align: center;
  font-size: 0.5rem;
  color: #707070;
}

.tab-bar-items img {
  height: 1.2rem;
  width: 1.2rem;
  vertical-align: middle;
  margin-top: 0.15rem;
  /* line-height: 49px;  */
}

.active {
  color: #f50765;
}
</style>
