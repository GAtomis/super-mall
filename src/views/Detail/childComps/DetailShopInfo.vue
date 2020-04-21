<template>
  <div class="showInfo" v-if="Object.keys(this.shop).length !== 0">
    <div class="shop-top">
      <img :src="shop.logo" alt="" />
      <div class="top-info">
        <p class="shop-title">
          {{ shop.name || '徐10小屋' }}
        </p>
        <div class="value-wrap">
          <ul
            class="value-content"
            v-for="(item, index) of shop.info.topInfo"
            :key="index"
          >
            <li class="content-key">
              {{ item.k }}
            </li>
            <li class="content-value">{{ item.v | sellCountFilter }}</li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
    <div class="shop-bottom">
      <ul class="score">
        <li v-for="(item, index) of shop.info.bottomInfo" :key="index">
          <span>{{ item.k }}</span
          >：<span>{{ item.v }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  //过滤器效果点赞要学习
  filters: {
    sellCountFilter(value) {
      let result = value
      if (value > 10000) {
        result = (result / 10000).toFixed(1) + '万'
      }
      return result
    }
  },
  data() {
    return {
      // shopInfo: this.shop.info
    }
  },
  mounted() {
    console.log(this.shop)
  }
}
</script>
<style lang="less" scoped>
.showInfo {
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  width: 100%;

  .shop-top {
    width: 100%;
    height: 5rem;
    display: flex;
    img {
      width: 28%;
      height: 100%;
      background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587448633870&di=786bef0ed3cda2bfc541db1f3adbd7b6&imgtype=0&src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F44498011.jpeg);
    }
    .top-info {
      width: 72%;
      // display: flex;
      .shop-title {
        font-size: 1.5rem;
        text-align: center;
      }
      .value-wrap {
        display: flex;
        width: 100%;
        text-align: center;
        margin-top: 1rem;
        .value-content {
          flex: 1;

          .content-key {
            font-size: 0.8rem;
            margin: 0.5rem 0;
          }
          .content-value {
            font-size: 0.6rem;
            margin: 0.5rem 0;
          }
        }
      }
    }
  }
  .shop-bottom {
    padding: 0.5rem 0;
    display: flex;
    width: 100%;
    border-bottom: 0.4rem solid #eee;
    .score {
      display: -webkit-box;
      display: flex;
      text-align: center;
      color: #999;
      font-size: 0.6rem;
      margin: 0.6rem 0 0.5rem;
      width: 100%;
      li {
        display: block;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
      }
    }
  }
}
</style>
