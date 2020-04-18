<template>
  <div class="showInfo">
    <div class="shop-top">
      <img :src="shop.logo" alt="" />
      <div class="shop-title">
        <span>{{ shop.name || '徐10小屋' }}</span>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="shop-bottom-middle">
        <div class="shop-middle-left">
          <div class="info-sells">
            <div class="sells-count">
              {{ shop.sells || '170.0万' }}
            </div>
            <div class="sells-text"><p>总销量</p></div>
          </div>
        </div>

        <div class="shop-bottom-right">
          <div><span></span> <span></span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailShopInfo',
  data() {
    return {
      shop: {
        name: 'shop-title',
        info: [{ sells: '170.0万' }, { goodsCount: 86 }, { collect: '54.0万' }],
        logo:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587106206213&di=2d3341979d01750c31c54bca0408f69c&imgtype=0&src=http%3A%2F%2Fwww.wzsky.net%2Fimg2015%2Fuploadimg%2F20151224%2F0944460.jpg'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.showInfo {
  display: flex;
  flex-direction: column;
  width: 100%;
  .shop-top {
    width: 100%;
    height: 5rem;
    position: relative;

    img {
      width: 7rem;
      height: 100%;
    }
    .shop-title {
      position: absolute;
      top: 1rem;
      left: 7.5rem;
      font-size: 2rem;
      text-align: center;
    }
  }
  .shop-bottom {
    display: flex;
    .shop-bottom-middle {
      display: flex;
      .shop-middle-left {
        flex: 1;
      }
    }
    // .shop-bottom-right {

    // }
  }
}
</style>
