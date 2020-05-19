<template>
  <div class="title-bar">
    <div class="title-opts   hasNativeBar">
      <h2 class="title"><!-- empty -->购物车({{ length ? length : 0 }})</h2>
      <div class="opts" @click="controlClick">
        <span v-if="isShow" class="opt manage">管理</span>

        <span v-if="!isShow" class="opt manage">完成</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { CART_LENGTH } from 'store/mutations_type.js'
export default {
  props: {
    controlSwitch: Boolean
  },
  data() {
    return {}
  },
  name: 'CartTitleBar',
  components: {},
  computed: {
    ...mapGetters({ length: CART_LENGTH }),
    isShow() {
      return !this.controlSwitch
    }
  },
  methods: {
    controlClick() {
      console.log('dasdas')

      this.$bus.$emit('controlClick', this.isShow)
    }
  }
}
</script>
<style lang="less" scoped>
.title-bar {
  box-shadow: 0 0.05rem 0.05rem rgba(100, 100, 100, 1);
  .title-opts {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    padding: 1rem 0.6rem 0.5rem 0;
    color: #000;
    .title {
      font-size: 1.5rem;
      line-height: 1.1rem;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: end;
      -webkit-align-items: flex-end;
      align-items: flex-end;
      padding-left: 0.6rem;
    }
  }
}
</style>
