<template>
  <div class="goods" @click="clickRoute">
    <!-- <a :href="goods.link"> -->
    <!-- <img :src="goods.image" /> -->
    <van-image lazy-load :src="goods.image" @load="onload">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
      <template v-slot:error>加载失败</template>
    </van-image>
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
    },
    onload() {
      this.$bus.$emit('goodsImgOnload')
    }
  }
}
</script>
<style scope>
.goods {
  padding-bottom: 2.25rem;
  position: relative;
}
.goods img {
  width: 100%;
  border-radius: 2%;
}

.goods-info {
  font-size: 0.6rem;
  position: absolute;
  bottom: 0.25rem;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0.15rem;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 1rem;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -0.75rem;
  top: 0;
  width: 0.7rem;
  height: 0.7rem;
  background: url('~assets/img/collect.svg') 0 0/0.7rem 0.7rem;
}
.advert {
  display: inline-block;
  background: coral;
  color: #ffffff;
  margin-right: 0.25rem;
  padding: 0.15rem 0.15rem;
  /* border-radius: 5%; */
}
</style>
