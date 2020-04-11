<template>
  <div>
    <div id="home">
      <!-- <div class="nav-box"> -->

      <nar-bar class="home-nav">
        <template v-slot:right> </template>
        <template v-slot:center>
          潮流天地
        </template>
        <template v-slot:left> </template>
      </nar-bar>

      <div class="content">
        <home-swiper :banner="banner" />
        <recommend-view :recommend="recommend" />
        <rank-in-week :rankList="rankList" />
        <home-tag-tab
          ref="tabs"
          :titleList="tagTabList"
          :homeGoods="homeGoods"
          @loadMore="loadMore"
        />
        <!-- <home-tabbar :title='["流行","新款","精选"]'/> 备用选项卡-->
      </div>

      <back-top
        class="back-top"
        v-show="btnFlag"
        @click.native="backTop"
      ></back-top>
    </div>
  </div>
</template>
<script>
// 公共方法和类
import { getHomeData, getRankList, getGoods } from 'network/Home.js'
import { debounce } from 'common/utils/utils.js'

// import HomeTabbar from 'components/content/HomeTabbar/HomeTabbar'
// import scroll from 'components/common/Scroll/Scroll'

// 公共组件
import BackTop from 'components/common/BackTop/BackTop'
import narBar from 'components/common/navbar/navBar'
//子组件
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

      //currentTab当前正在选择的标签
      currentTab: null,
      //tabs组件的虚拟DOM
      tabs: null,
      //按钮显示与否
      btnFlag: false,
      //当前高度记录
      scrollTop: 200,
      scrollLeft: 0
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
    // scroll,
    //轮播图组件封装
    HomeSwiper,
    //返回顶部按钮
    BackTop
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
  mounted() {
    this.tabs = this.$refs.tabs
    //监听渲染后的当tabs标签的变化
    this.$bus.$on('renderd', name => {
      this.currentTab = name
    })
    //监听改变tabs标签的变化
    this.$bus.$on('change', name => {
      this.currentTab = name
      console.log('切换标签')

      this.tabs.loading = false
      this.tabs.finished = false
    })
  },

  //keep-alive激活函数
  activated() {
    //加入自定义事件的滑动的监听
    window.addEventListener('scroll', this.scrollToTop)
    // window.scrollTo(this.scrollLeft, this.scrollTop)
  },
  //keep-alive退出周期函数
  deactivated() {
    //撤销监听滑动函数
    window.removeEventListener('scroll', this.scrollToTop)
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
          this.tabs.finished = true
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
    },
    //下拉加载的方法响应
    loadMore() {
      //获得子组件对象

      let func = () => {
        this.getGoods(this.currentTab)
        // this.tabs.loading = true

        setTimeout(() => {
          this.tabs.loading = false
        }, 2000)
      }

      const loading = debounce(func, 2000)
      loading()

      // console.log(Loading)
    },
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 100) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    }
  }
}
//组件被创建的周期函数
</script>
<style scoped>
/* 主页整体样式 */
#home {
  /* padding-top: 44px; */
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
  /* overflow: hidden; */
}
/* 返回顶部图标定位样式 */
.back-top {
  position: fixed;
  bottom: 55px;
  right: 20px;
  background: #fff;
  border-radius: 10px;
  opacity: 0.6; /* 透明度 */
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
