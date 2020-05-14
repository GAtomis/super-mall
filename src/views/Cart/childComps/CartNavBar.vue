<template>
  <div>
    <nav-bar
      ><template v-slot:center>
        <div>购物车</div>
      </template>
      <template v-slot:right>
        <div>管理</div>
      </template>
    </nav-bar>
  </div>
</template>
<script>
import navBar from 'components/common/navbar/navBar'
export default {
  name: 'CartNavBar',
  components: {
    navBar
  }
}
</script>
<style lang="less" scoped></style>
