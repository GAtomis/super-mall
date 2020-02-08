<template>
    <div>
        
            
            <nar-bar>
                <template v-slot:left>  
                    前窗口
                </template>
                <template v-slot:center>
                    中标题
                </template>
                <template v-slot:right>
                    后窗口
                </template>

            </nar-bar>
        
    </div>
</template>
<script>
import narBar from 'components/common/navbar/navBar'
export default {
  name: 'Home',
  components: {
    narBar
  }
}
</script>
<style scoped>
</style>