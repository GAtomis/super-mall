<template>
    <div>
        <h1>About</h1>
        <button @click="btnClick">检测</button>
    </div>
</template>
<script>
export default {
  name: 'About',
  methods: {
    btnClick() {
      console.log('检测中')
    }
  }
}
</script>
<style scoped>
</style>