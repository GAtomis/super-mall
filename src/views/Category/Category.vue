<template>
  <div class="Category"></div>
</template>
<script>
// import scroll from 'components/common/Scroll/Scroll'
export default {
  name: 'Category',

  data() {
    return {
      // visible: <false></false>
    }
  },
  components: {
    // scroll
  },
  methods: {
    change() {
      // this.visible = 1
    }
  }
}
</script>
<style scoped>
.Category {
  height: 100vh;
  position: relative;
}
.cart-view {
  position: absolute;

  top: 0;
  bottom: 10rem;
  width: 100%;
  /* overflow-y: auto; */
}
.bg1 {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.bg2 {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>
