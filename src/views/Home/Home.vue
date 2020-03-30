<template>
    <div>
        <div id="home">
            <!-- <div class="nav-box"> -->
              
            <nar-bar class="home-nav">
                <template v-slot:right>
     
                </template>
                <template v-slot:center>
                    潮流天地
                </template>
                <template v-slot:left>

                </template>


            </nar-bar>
            
            


                  
                
            <scroll class="content">
                <home-swiper :banner="banner"/>
                <recommend-view :recommend="recommend"/>
                <rank-in-week :rankList="rankList"/>
                <home-tag-tab :titleList="tagTabList" :homeGoods="homeGoods"/>
                <!-- <home-tabbar :title='["流行","新款","精选"]'/> 备用选项卡-->
            </scroll>  

        </div>        
    </div>
</template>
<script>
import { getHomeData, getRankList, getGoods } from 'network/Home.js'
import narBar from 'components/common/navbar/navBar'
// import HomeTabbar from 'components/content/HomeTabbar/HomeTabbar'
import scroll from 'components/common/Scroll/Scroll'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import RankInWeek from './childComps/RankInWeek'
import HomeTagTab from './childComps/HomeTabTag'

export default {
  name: 'Home',
  data() {
    return {
      //轮播数据，未用到
      result: null,
      //每周人气组件的用到的数据
      recommend: [],
      //轮播图数据
      banner: [],
      //分类数据
      rankList: [],
      //三个点击标签的类型
      tagTabList: ['新款', '猜你喜欢', '推荐'],
      //宫格图类型数据
      homeGoods: {
        news: { page: 0, list: [] },
        pops: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    }
  },
  components: {
    //标题组件
    narBar,
    //每周人气组件
    RecommendView,
    //分类组件 整改到数据库
    RankInWeek,
    // HomeTabbar
    HomeTagTab,
    //滑动better-scroll组件封装功能
    scroll,
    //轮播图组件封装
    HomeSwiper
  },
  created() {
    /*Home数据一加载*/
    //主页数据包括轮播一周
    this.getHomeData()
    //请求商品分类部分的接口数据
    this.getRankList()
    //请求方法商品信息统一封装
    this.getGoods('news')
    //请求猜你喜欢
    this.getGoods('pops')
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
}
//组件被创建的周期函数
</script>
<style scoped>
/* 主页整体样式 */
#home {
  padding: 44px;
  position: relative;
  height: 100vh;
}
/* scroll可滑动部分样式 */
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
/* 轮播样式会迁移走 */
.slide-img {
  width: 100%;
}
/* 轮播样式会迁移走 */
.vsi-box {
  /* 防止抖动模式 */
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 52%;
  position: relative;
}
/* 标题栏样式 */
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>