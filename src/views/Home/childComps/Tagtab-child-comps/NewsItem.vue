<template>
  <div class="goods" @click="clickRoute">
    <!-- <a :href="goods.link"> -->
    <img :src="goods.image" />
    <div class="goods-info">
      <p>
        <span class="advert">{{ goods.advert }}</span
        >{{ goods.name }}
      </p>

      <span class="price">￥{{ goods.price }}</span>
      <span class="collect">{{ goods.collect }}</span>
    </div>
    <!-- </a> -->
  </div>
</template>
<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  name: 'NewsItem',
  methods: {
    clickRoute() {
      //id动态路由模式
      this.$router.push('/detail/' + this.goods.id)
    }
  }
}
</script>
<style scope>
.goods {
  padding-bottom: 45px;
  position: relative;
}
.goods img {
  width: 100%;
  border-radius: 2%;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url('~assets/img/collect.svg') 0 0/14px 14px;
}
.advert {
  display: inline-block;
  background: coral;
  color: #ffffff;
  margin-right: 5px;
  padding: 3px 3px;
  /* border-radius: 5%; */
}
</style>
