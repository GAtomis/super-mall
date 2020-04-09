<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <div @click="backClick">
          <img src="@img/common-Back.svg" alt="" class="nav-img" />
        </div>
      </template>
      <template v-slot:center>
        <div>详情页</div>
      </template>
    </nav-bar>
  </div>
</template>
<script>
import navBar from 'components/common/navbar/navBar'
export default {
  name: 'DetailNavBar',
  data() {
    return {}
  },
  components: {
    navBar
  },
  methods: {
    backClick() {
      this.$router.back()
      //可以返回更多
      // this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.nav-img {
  width: 50px;
  height: 44px;
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>
