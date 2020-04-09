<template>
  <div>
    <!-- 导航栏封装 -->
    <detail-nav-bar />
  </div>
</template>
<script>
import DetailNavBar from './childComps/DetailNavBar'
export default {
  name: 'Detail',
  data() {
    return {
      id: null
    }
  },
  created() {
    this.id = this.$route.params.id
    console.log('dsa ')
  },
  activated() {
    this.id = this.$route.params.id
  },
  components: {
    DetailNavBar
  }
}
</script>
<style scoped></style>
