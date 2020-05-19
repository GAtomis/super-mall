<template>
  <div>
    <nav-bar
      ><template v-slot:center>
        <div>购物车</div>
      </template>
      <template v-slot:right>
        <div @click="controlClick">
          <span v-if="isShow">管理</span>

          <span v-if="!isShow">完成</span>
        </div>
      </template>
    </nav-bar>
  </div>
</template>
<script>
import navBar from 'components/common/navbar/navBar'
export default {
  props: {
    controlSwitch: Boolean
  },
  computed: {
    isShow() {
      return !this.controlSwitch
    }
  },
  name: 'CartNavBar',
  data() {
    return {}
  },
  components: {
    navBar
  },
  methods: {
    controlClick() {
      this.$bus.$emit('controlClick', this.isShow)
    }
  }
}
</script>
<style lang="less" scoped></style>
