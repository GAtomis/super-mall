<template>
  <div class="detail_info">
    <h5 class="title">{{ goodsInfo.title }}</h5>
    <div class="price">
      <span class="new_price">{{ goodsInfo.newPrice }}</span>
      <span class="odl_price">{{ goodsInfo.oldPrice }}</span>
      <span class="discount">{{ goodsInfo.discount }}</span>
    </div>
    <div class="columns">
      <span v-for="(item, index) in goodsInfo.columns" :key="index">{{
        item
      }}</span>
    </div>
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
  padding: 0 10px;
  .title {
    font-size: 14px;
    margin: 10px 0;
  }
  .price {
    display: flex;
    align-items: center;
    margin: 15px 0;
    .new_price {
      font-size: 30px;
      color: #f02430;
    }
    .odl_price {
      font-size: 15px;
      color: gray;
      margin: 0 10px;
      align-self: flex-end;
      text-decoration: line-through;
    }
    .discount {
      font-size: 15px;
      color: white;
      padding: 0.08rem;
      background-image: linear-gradient(to right, #f02430, #f9615e);
      border-radius: 5px;
    }
  }
  .columns {
    display: flex;
    justify-content: space-between;
    span {
      line-height: 30px;
      color: gray;
      font-size: 14px;
    }
  }
  .services {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #f3f5f4;
    height: 1rem;
    .services_item {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 12px;
        height: 12px;
      }
      span {
        font-size: 11px;
      }
    }
  }
}
</style>
