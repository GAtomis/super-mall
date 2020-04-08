<template>
  <div>
    <van-tabs v-model="active" 
    :offset-top="offsetTop" 
    :sticky="isSticky" 
    swipeable 
    animated
    @rendered="rendered" 
    @change="change">
      <slot></slot>
    
    </van-tabs>
  </div>
</template>
<script>
export default {
  props: {
    offsetTop: {
      type: String,
      default() {
        return 0
      }
    },
    isSticky: {
      type: Boolean,
      default() {
        return false
      }
    }
  },

  data() {
    return {
      active: 0
    }
  },
  methods: {
    rendered(name) {
      this.$bus.$emit('renderd', name)
    },
    change(name) {
      this.$bus.$emit('change', name)
    }
  }
}
</script>
<style scope >
</style>