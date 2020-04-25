<template>
  <div id="App">
    <!-- <main-tabbar /> -->
    <keep-alive exclude="Detail">
      <router-view :key="$route.fullPath" />
    </keep-alive>
  </div>
</template>
<script>
// import MainTabbar from 'components/content/MainTabbar/MainTabbar'
export default {
  name: 'App',
  components: {
    // MainTabbar
  },

  data() {
    return {}
  },
  methods: {}
}
</script>
<style>
@import 'assets/css/base.css';
</style>
