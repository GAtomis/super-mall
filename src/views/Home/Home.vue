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
            


                  
                
              
            <swiper>
                    <van-swipe-item v-for="(item, index) in banner" :key="index">
                      <a :href="item.link"><img  class="slide-img" :src="item.image" /></a>
                    </van-swipe-item></swiper>
        
    </div>
</template>
<script>
import { getHomeData } from 'network/Home.js'
import narBar from 'components/common/navbar/navBar'
import swiper from 'components/common/vant-swiper/swiper'

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
    narBar,
    swiper
  },
  created() {
    getHomeData().then(res => {
      this.result = res.data
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
      console.log(this.result)
    })
  }
}
//组件被创建的周期函数
</script>
<style scoped>
.slide-img {
  width: 100%;
}
</style>