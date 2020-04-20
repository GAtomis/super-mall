<template>
  <div class="showInfo" v-if="this.shop != null">
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
            <li class="content-value">{{ item.v }}</li>
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
      width: 33%;
      height: 100%;
    }
    .top-info {
      width: 67%;
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
