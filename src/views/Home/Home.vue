<template>
    <div>
        <div id="home">
            <div class="nav-box">
            <nar-bar class="home-nav">
                <template v-slot:right>
     
                </template>
                <template v-slot:center>
                    潮流天地
                </template>
                <template v-slot:left>

                </template>


            </nar-bar>
            </div>
            


                  
                
              
            <swiper>
                    <van-swipe-item v-for="(item, index) in banner" :key="index">
                      <div class="vsi-box">
                      <a :href="item.link"><img  class="slide-img" :src="item.image" /></a>
                      </div>
                    </van-swipe-item>
            </swiper>
            <recommend-view :recommend="recommend"/>
            <rank-in-week :rankList="rankList"/>
            <home-tag-tab :titleList="tagTabList" :homeGoods="homeGoods"/>
            <!-- <home-tabbar :title='["流行","新款","精选"]'/> -->

        </div>
    </div>
</template>
<script>
import { getHomeData, getRankList, getGoods } from 'network/Home.js'
import narBar from 'components/common/navbar/navBar'
import swiper from 'components/common/vant-swiper/swiper'
import RecommendView from './childComps/RecommendView'
import RankInWeek from './childComps/RankInWeek'

// import HomeTabbar from 'components/content/HomeTabbar/HomeTabbar'
import HomeTagTab from './childComps/HomeTabTag'

export default {
  name: 'Home',
  data() {
    return {
      result: null,
      recommend: [],
      banner: [],
      rankList: [],
      tagTabList: ['新款', '猜你喜欢', '推荐'],
      homeGoods: {
        news: { page: 0, list: [] },
        pop: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    }
  },
  components: {
    narBar,
    swiper,
    RecommendView,
    RankInWeek,
    // HomeTabbar
    HomeTagTab
  },
  created() {
    /*Home数据一加载*/
    //主页数据包括轮播一周
    this.getHomeData()
    //请求商品分类部分的接口数据
    this.getRankList()
    this.getGoods('news')
  },
  methods: {
    //请求方法商品信息统一封装
    getGoods(type) {
      const page = this.homeGoods[type].page + 1

      getGoods(type, page)
        .then(res => {
          this.homeGoods[type].list.push(...res.data.list)
          this.homeGoods[type].page += 1
        })
        .catch(error => {
          console.log('告警', error)
        })
    },
    //请求商品分类部分统一方法
    getRankList() {
      //请求商品分类部分的接口数据
      getRankList().then(res => {
        console.log('商品分类部分请求成功', res)

        this.rankList = res.data.rank.list
      })
    },
    getHomeData() {
      //主页数据包括轮播一周
      getHomeData().then(res => {
        this.result = res.data
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
        // console.log(this.result)
        // console.log(res)
      })
    }
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
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.nav-box {
  height: 44px;
}
</style>