<template>
  <div class="detail_info">
    <h5 class="title">{{ goodsInfo.title }}</h5>
    <div class="price">
      <span class="new_price"
        ><span class="price_tag">￥</span>{{ goodsInfo.newPrice }}
      </span>
      <span class="old_price">￥{{ goodsInfo.oldPrice }}</span>
      <span class="discount">{{ goodsInfo.discount }}</span>
    </div>
    <div class="columns">
      <span v-for="(item, index) in goodsInfo.columns" :key="index">{{
        item
      }}</span>
    </div>
    <!-- <div class="m-b-t-20"></div> -->
    <div class="services">
      <div
        class="services_item"
        v-for="(item, index) in goodsInfo.services"
        :key="index"
      >
        <img src="@img/detail-Correct.svg" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.detail_info {
  padding: 0 0.5rem;
  .title {
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
  // .m-b-t-20 {
  //   // margin: 0.57rem 0;
  // }
  .price {
    display: flex;
    align-items: center;
    margin: 0.75rem 0;
    .new_price {
      font-size: 1.25rem;
      color: #f02430;
      .price_tag {
        font-size: 0.7rem;
      }
    }
    .old_price {
      font-size: 0.75rem;
      color: gray;
      margin: 0 0.5rem;
      align-self: flex-end;
      text-decoration: line-through;
    }
    .discount {
      font-size: 0.75rem;
      color: white;
      padding: 0.75rem;
      background-image: linear-gradient(to right, #f02430, #f9615e);
      border-radius: 0.5rem;
    }
  }
  .columns {
    display: flex;
    justify-content: space-between;
    // margin: 20px 0;
    border-bottom: 0.4rem solid #eee;
    padding-bottom: 0.4rem;
    span {
      line-height: 1.5rem;
      color: gray;
      font-size: 0.75rem;
    }
  }
  .services {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 0.05rem solid #f3f5f4;
    height: 2.5rem;
    border-bottom: 0.4rem solid #eee;
    padding-bottom: 0.4rem;
    // border-bottom: 8px solid #eee;
    // padding-bottom: 15px;
    margin: 0.57rem 0;
    .services_item {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 0.6rem;
        height: 0.6rem;
      }
      span {
        font-size: 0.75rem;
      }
    }
  }
}
</style>
