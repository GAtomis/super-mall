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
    <!-- 底部导航购买导航栏 -->
    <detail-footer-bar class="footer-bar-comp"></detail-footer-bar>
    <!-- 商品规格弹出窗口 -->
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
      @sku-selected="selClick"
      ref="sku"
    />
    <!-- 拉动条 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      class="van-list"
    >
      <!-- 详情页轮播图 -->
      <detail-swiper :detailSwiper="detailSwiper.image"></detail-swiper>
      <!-- 详情页的基本信息 -->
      <detail-base-info :goodsInfo="goodsInfo"></detail-base-info>
      <!-- 详情页商品规格 -->
      <div @click="isShowClick" style="padding: 0 0.5rem;">
        <div class="moresku">
          <span class="text">{{ this.goodsize }}</span>
          <span class="icon-xiangyou iconfont"></span>
        </div>
      </div>
      <!-- 详情页店铺信息 -->
      <detail-shop-info :shop="shop"></detail-shop-info>
      <!-- 详情页图文参数详情 -->
      <detail-image-info :detList="detList"></detail-image-info>
    </van-list>
  </div>
</template>
<script>
import { getDetail, Goods, shopInfo } from 'network/Detail'

import DetailTabs from './childComps/DetailTabs'
import DetailSwiper from './childComps/DetailSwiper'
import DetailNavBar from './childComps/DetailNavBar'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailFooterBar from './childComps/DetailFooterBar'
import DetailImageInfo from './childComps/DetailImageInfo'

// import DetailDialog from './childComps/DetailDialog'
export default {
  name: 'Detail',
  computed: {
    sku() {
      return {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。

        tree: [
          {
            k: '颜色', // skuKeyName：规格类目名称
            v: [
              {
                id: '黑色', // skuValueId：规格值 id
                name: '黑色', // skuValueName：规格值名称
                imgUrl:
                  'https://s11.mogucdn.com/mlcdn/c45406/170404_1a1777g824djdle6d1aa664fcj4c7_640x960.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl:
                  'https://s11.mogucdn.com/mlcdn/c45406/170404_1a1777g824djdle6d1aa664fcj4c7_640x960.jpg' // 用于预览显示的规格类目图片
              },
              {
                id: '白色',
                name: '白色',
                imgUrl:
                  'https://s5.mogucdn.com/mlcdn/c45406/170404_6d94c1i457lg7e58djfgc08d19k31_640x960.jpg',
                previewImgUrl:
                  'https://s5.mogucdn.com/mlcdn/c45406/170404_6d94c1i457lg7e58djfgc08d19k31_640x960.jpg'
              }
            ],
            k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id,标注属于哪个规格栏的 一般不超过3个
          },
          {
            k: '尺寸', // skuKeyName：规格类目名称
            v: [
              {
                id: 'M', // skuValueId：规格值 id
                name: 'M' // skuValueName：规格值名称
              },
              {
                id: 'L',
                name: 'L'
              },
              {
                id: 'X',
                name: 'X'
              }
            ],
            k_s: 's2' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        list: [
          //一种组合类型 tree里面为样式栏 list里为组合栏 s1 和 s2 的组合成为一个对象价格和库存都是按这个组合来算的，比如s1是衣服的颜色 s2是尺码，把他们两的ID一起整合到一起获得一个才能算一个完整的用户选择商品，在后端获取的是这个整个组合的，而不是单个尺码
          {
            id: 1600, // skuId，下单时后端需要
            price: 432000, // 价格（单位分）
            s1: '黑色', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: 'M', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 322 // 当前 sku 组合对应的库存
          },
          {
            id: 1700, // skuId，下单时后端需要
            price: 432000, // 价格（单位分）
            s1: '黑色', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: 'L', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 142 // 当前 sku 组合对应的库存
          },
          {
            id: 1800, // skuId,下单时后端需要
            price: 432000, // 价格（单位分）
            s1: '黑色', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: 'X', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 142 // 当前 sku 组合对应的库存
          },
          {
            id: 1601, // skuId，下单时后端需要
            price: 321000, // 价格（单位分）
            s1: '白色', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: 'M', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 42 // 当前 sku 组合对应的库存
          },
          {
            id: 1701, // skuId，下单时后端需要
            price: 321000, // 价格（单位分）
            s1: '白色', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: 'L', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 72 // 当前 sku 组合对应的库存
          },
          {
            id: 1801, // skuId，下单时后端需要
            price: 321000, // 价格（单位分）
            s1: '白色', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: 'X', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 92 // 当前 sku 组合对应的库存
          }
        ],
        price: '0', // 默认价格（单位元）
        stock_num: 999, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false // 是否无规格商品
      }
    },
    goods() {
      return {
        // 默认商品 sku 缩略图
        picture:
          'https://s11.mogucdn.com/mlcdn/c45406/170404_1a1777g824djdle6d1aa664fcj4c7_640x960.jpg'
      }
    }
  },
  data() {
    return {
      goodsId: null,
      opacityStyle: {
        opacity: 0
      },
      showAbs: false, //van-list
      loading: false, //van-list
      finished: false, //van-list
      detailSwiper: [],
      goodsInfo: {},
      show: false, //van-action
      goodsize: '请选择规格',
      shop: {},
      detList: {}
    }
  },
  created() {
    //商品唯一id
    this.goodsId = this.$route.params.id

    //假数据判断，真接口时重写方法
    let num = Number(this.goodsId)
    // console.log(num)

    let getNumStatus = num => {
      if (num % 2 == 0) {
        this.getDetail(1)
        console.log(true)
      } else {
        this.getDetail(0)
        console.log(false)
      }
    }
    getNumStatus(num)

    //修复router.push跳转的bug，将页面归0
    window.scrollTo(0, 0)

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
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImageInfo
    // DetailDialog
  },
  methods: {
    //隐藏tab栏判断是否隐藏的方法
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
    },
    //获得数据源方法
    getDetail(id) {
      getDetail(id)
        .then(res => {
          // ES6解构思想 等于data=res.data
          const { data } = res
          //由于是假后台这里面就做个判断取数据，真后台请重新编写
          const id1 = id ? data.tab1.id1 : data.tab1.id2

          //取出Swiper的数据
          this.detailSwiper = id1.Swiper
          //取出商品信息数据
          this.goodsInfo = new Goods(
            id1.goodsInfo.title,
            id1.goodsInfo.price,
            id1.goodsInfo.columns,
            id1.goodsInfo.services
          )

          // 取出店铺相关信息数据
          this.shop = new shopInfo(id1.shopInfo)
          // 取出图文参数相关信息
          this.detList = id1.imageInfo
        })
        .catch(err => {
          console.log(err)
        })
    },
    //购物车弹窗显示
    isShowClick() {
      this.show = true
    },
    //购物车加入
    onAddCartClicked(goodsData) {
      console.log(goodsData)
    },
    //立即购买加入
    onBuyClicked(goodsData) {
      console.log(goodsData)
    },
    //切换商品类型的回调函数
    selClick(skuValue) {
      if (skuValue.selectedSkuComb) {
        this.goodsize = `已选择:  ${
          skuValue.selectedSku.s1 ? skuValue.selectedSku.s1 : ''
        },${skuValue.selectedSku.s2 ? skuValue.selectedSku.s2 : ''},${
          skuValue.selectedSku.s3 ? skuValue.selectedSku.s3 : ''
        }`
        console.log(this.$refs.sku)
      } else {
        this.goodsize = '请选择规格'
      }
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
  top: 2.2rem;
  bottom: 2.5rem;
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
  top: 2.2rem;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 9;
}
.content {
  padding: 0.8rem 0.8rem 8rem;
}
.moresku {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 2.48rem;
  /* padding: 0 0.828rem; */
  line-height: 2.48rem;
  background: #fff;
  justify-content: space-between;
  border-bottom: 0.4rem solid #eee;
  padding-bottom: 0.4rem;
  margin: 0.57rem 0;
  padding-left: 0.2rem;
}
.moresku .text {
  display: block;
  font-size: 0.75rem;
  color: #666;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.iconfont {
  font-family: 'iconfont' !important;
  font-size: 0.8rem;
  font-style: normal;
  color: #666;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
