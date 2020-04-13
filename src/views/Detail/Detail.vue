<template>
  <div id="detail">
    <!-- 导航栏封装 -->
    <detail-nav-bar class="nav-comp" />
    <!-- 可隐藏点击栏 -->
    <detail-tabs
      v-show="showAbs"
      :style="opacityStyle"
      class="tabs-comp"
    ></detail-tabs>
    <detail-footer-bar class="footer-bar-comp"></detail-footer-bar>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      class="van-list"
    >
      <detail-swiper :detailSwiper="detailSwiper.image"></detail-swiper>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息大萨达撒多撒多撒多撒大所大所多撒大所多</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
      <div><h1>所有信息</h1></div>
    </van-list>
  </div>
</template>
<script>
import { getDetail } from 'network/Detail'

import DetailNavBar from './childComps/DetailNavBar'
import DetailTabs from './childComps/DetailTabs'
import DetailFooterBar from './childComps/DetailFooterBar'
import DetailSwiper from './childComps/DetailSwiper'
export default {
  name: 'Detail',
  data() {
    return {
      id: null,
      opacityStyle: {
        opacity: 0
      },
      showAbs: false,
      loading: false,
      finished: false,
      detailSwiper: [],
      goodsInfo: {}
    }
  },
  created() {
    this.id = this.$route.params.id
    getDetail(this.id)
      .then(res => {
        console.log(res)
        // ES6解构思想 等于data=res.data
        const { data } = res
        this.detailSwiper = data.tab1.id1.Swiper
      })
      .catch(err => {
        console.log(err)
      })
    // console.log('dsa ')
    window.addEventListener('scroll', this.handleScroll)
  },
  activated() {
    this.id = this.$route.params.id
    window.addEventListener('scroll', this.handleScroll)
  },
  components: {
    DetailNavBar,
    DetailTabs,
    DetailFooterBar,
    DetailSwiper
  },
  methods: {
    handleScroll() {
      const top =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      console.log(top)

      if (top >= 44) {
        let opacity = (top - 44) / 44
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = true
      } else if (top == 0) {
        this.showAbs = false
      }
      // console.log('adc')
    }
  }
}
</script>
<style scoped>
#detail {
  height: 100vh;
  position: relative;
}
.van-list {
  position: absolute;
  top: 44px;
  bottom: 50px;
  /* overflow-y: scroll; */
}
.nav-comp {
  background-color: #ffffff;
  color: #000;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tabs-comp {
  position: fixed;
  top: 44px;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 9;
}
</style>
