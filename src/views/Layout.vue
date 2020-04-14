<template>
  <div id="Layout">
    <main-tabbar />
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import MainTabbar from 'components/content/MainTabbar/MainTabbar'
export default {
  name: 'Layout',
  components: {
    MainTabbar
  }
}
</script>
<style>
/* @import 'assets/css/base.css'; */
</style>
