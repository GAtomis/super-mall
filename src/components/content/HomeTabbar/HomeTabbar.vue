<template>
  <div>
    <div class="homeTabbar-box">
      <div @click="tabbarClick(index)" class="homeTabbar-control" v-for="(item,index) of items" :key="index" :class="{active:index==currentIndex}">
        <span>{{item}}</span>
      </div>

      
    </div>
    <div>大大大</div><div>大大大</div><div>大大大</div><div>大大大</div><div>大大大</div><div>大大大</div><div>大大大</div>
  </div>
</template>
<script>
export default {
  props: {
    title: Array
  },
  data() {
    return {
      items: this.title,
      //记录选中的标签 在点击的时候会触发当前element的函数判断
      currentIndex: 0
    }
  },
  methods: {
    tabbarClick(index) {
      //将所有标签判断是否等于点击标签一样的index值 是就true 不是就false
      this.currentIndex = index
    }
  }
}
</script>
<style scope>
.homeTabbar-box {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.homeTabbar-control {
  flex: 1;
}
.homeTabbar-control span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>