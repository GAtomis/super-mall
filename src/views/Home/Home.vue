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
import { getHomeData } from 'network/Home.js'
import narBar from 'components/common/navbar/navBar'
export default {
  name: 'Home',
  data() {
    return {
      result: null,
      recommend: [],
      banner: []
    }
  },
  components: {
    narBar
  },
  created() {
    getHomeData().then(res => {
      this.result = res.data
      this.banner = res.data.banner
      this.recommend = res.data.recommend
      console.log(this.result)
    })
  }
}
//组件被创建的周期函数
</script>
<style scoped>
</style>