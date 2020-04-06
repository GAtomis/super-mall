<template>
    
        <div id="home">
            <!-- <div class="nav-box"> -->
              
            <nar-bar class="home-nav" >
                <template v-slot:right>
     
                </template>
                <template v-slot:center>
                    潮流天地
                </template>
                <template v-slot:left>

                </template>


            </nar-bar>
            
            


                  
                
            <scroll class="content" ref="scroll" :probeType="3" @ByScroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
                <home-swiper :banner="banner"/>
                <recommend-view :recommend="recommend"/>
                <rank-in-week :rankList="rankList"/>
                <home-tag-tab :titleList="tagTabList" :homeGoods="homeGoods" @rendered="firstRefresh" @change="change"/>
                <!-- <home-tabbar :title='["流行","新款","精选"]'/> 备用选项卡-->
            </scroll>  
            <!-- click.native  组件点击事件原生化才能冒泡出事件 -->
            <back-top @click.native="backClick" class="back-top " v-show="isShowBackTop"/>
        </div>        
    
</template>
<script>
//公共组件部分
import { getHomeData, getRankList, getGoods } from 'network/Home.js'
import { debounce } from 'common/utils/utils.js'

import narBar from 'components/common/navbar/navBar'
// import HomeTabbar from 'components/content/HomeTabbar/HomeTabbar'
import scroll from 'components/common/Scroll/Scroll'
import BackTop from 'components/common/BackTop/BackTop'
// import swiper from 'components/common/vant-swiper/swiper'
//子组件部分
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
      },
      //判断BackTop组件是否显示
      isShowBackTop: false,
      //当前标签判断
      currentTab: null,
      //局部scroll
      scroll
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
    HomeSwiper,
    //按钮回到顶部
    BackTop
    // swiper
  },
  //组件被创建的周期函数
  mounted() {
    this.scroll = this.$refs.scroll
    // console.log(this.scroll)

    let func = () => {
      this.$refs.scroll.refresh
      console.log('图片加载触发')
    }

    //事件总线监听非父子组件的通信
    let refresh = debounce(func, 500)

    this.$bus.$on('newsLoad', () => {
      refresh()
    })
    this.$bus.$on('guessLoad', () => {
      refresh()
    })
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
      // console.log(this.currentTab)
      const page = this.homeGoods[type].page + 1

      getGoods(type, page)
        .then(res => {
          this.homeGoods[type].list.push(...res.data.list)
          this.homeGoods[type].page += 1
          this.scroll.refresh()
        })
        .catch(error => {
          console.log('告警', error)
        })
      // this.scroll.refresh()
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
    },
    backClick() {
      //通过组件对象,得到组件需要的对象
      // this.scroll = this.$refs.scroll.Bscroll
      //调用组件定位方法
      this.scroll.scrollTo(0, 0, 1000)
      // scroll.scrollToElement(, 1000, 1, 1)

      // this.$refs.scroll.Bscroll.scrollTO(0.0)
      console.log('点击插件返回')
    },
    contentScroll(p) {
      //这里做一个是否显示的判断
      this.isShowBackTop = p.y < -800
    },
    //首次渲染
    firstRefresh(name) {
      this.currentTab = name
      // console.log(this.currentTab)
      this.scroll.refresh()
    },
    //点击触发改变
    change(name) {
      this.currentTab = name
      // console.log(this.currentTab)
    },
    loadMore() {
      //通过组件对象,得到组件需要的对象
      console.log('下拉响应中')

      // // console.log(this.currentTab)

      //

      debounce(() => {
        this.getGoods(this.currentTab)
        this.scroll.finishPullUp()
      }, 500)()
    }
  }
}
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
/* 返回顶部图标定位样式 */
.back-top {
  position: fixed;
  bottom: 55px;
  right: 20px;

  background: #fff;
  border-radius: 10px;
}
</style>