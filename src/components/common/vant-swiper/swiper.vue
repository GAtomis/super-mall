<template>
  <div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :stop-propagation="false" >

        <div class="slide">
          <slot>
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
          </slot>
        </div>


      </van-swipe>
  </div>
</template>
<script>
export default {
  name: 'Swiper'
}
</script>
<style scope>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  /* line-height: 150px; */
  text-align: center;
  /* background-color: #39a9ed; */
}
.slide {
  width: 100%;
  /* flex-shrink: 0; */
}
</style>