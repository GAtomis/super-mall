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
                      <div class="vsi-box">
                      <a :href="item.link"><img  class="slide-img" :src="item.image" /></a>
                      </div>
                    </van-swipe-item>
            </swiper>
            <recommend-view :recommend="recommend"/>
            <rank-in-week :rankList="rankList"/>

        
    </div>
</template>
<script>
import { getHomeData, getRankList } from 'network/Home.js'
import narBar from 'components/common/navbar/navBar'
import swiper from 'components/common/vant-swiper/swiper'
import RecommendView from './childComps/RecommendView'
import RankInWeek from './childComps/RankInWeek'

export default {
  name: 'Home',
  data() {
    return {
      result: null,
      recommend: [],
      banner: [],
      rankList: []
    }
  },
  components: {
    narBar,
    swiper,
    RecommendView,
    RankInWeek
  },
  created() {
    //Home数据一加载
    getHomeData().then(res => {
      this.result = res.data
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
      // console.log(this.result)
      // console.log(res)
    })
    getRankList().then(res => {
      console.log(res)

      this.rankList = res.data.rank.list
    })
  }
  //数据而rankLIst请求加载
}
//组件被创建的周期函数
</script>
<style scoped>
.slide-img {
  width: 100%;
}
.vsi-box {
  /* 防止抖动模式 */
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 52%;
  position: relative;
}
</style>