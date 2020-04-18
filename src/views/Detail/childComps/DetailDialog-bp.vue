<template>
  <div>
    <div class="dialog-box">
      <div class="main-info">
        <img
          src="https://s11.mogucdn.com/mlcdn/c45406/170404_1a1777g824djdle6d1aa664fcj4c7_640x960.jpg_128x999.jpg"
          alt=""
        />
        <div class="right-origin">
          <div>
            <span class="now-price"
              ><span class="unit">¥</span><span class="num">35.00</span></span
            >
          </div>
          <div class="stock">库存8356件</div>
          <div class="sku-text">请选择：尺码</div>
        </div>
      </div>
      <div class="scroll-view">
        <div class="sku-info">
          <div>
            <div class="label">颜色</div>
            <ul class="sku-list">
              <li
                v-for="(item, index) of colorItems"
                :key="index"
                @click="colorClick(index)"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <div>
            <div class="label">尺码</div>
            <ul class="sku-list">
              <li v-for="(item, index) of sizeItems" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
          <div>
            <!-- 设置integer属性后，输入框将限制只能输入整数 -->
            <div class="label">数量</div>
            <van-stepper v-model="value" integer />
          </div>
          <div class="dialog-cart-btn">
            <div class="btn-pink"></div>
            <div class="btn-red"></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailSizeChoice',
  data() {
    return {
      currentIndex: 0,
      colorItems: ['白色', '黑色'],
      sizeItems: ['S', 'M', 'L', 'XL', 'XXL']
    }
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.dialog-box {
  .main-info {
    background: #fff;
    padding: 16.56px 8.28px;
    height: 110.4px;
    position: relative;
    img {
      max-height: 165.6px;
      width: 88.3px;
      margin-left: 9.384px;
      border-radius: 2.2px;
      box-shadow: 0 4.4px 8.8px 0 rgba(0, 0, 0, 0.1);
      position: absolute;
      bottom: 16.5px;
      background: white;
    }
    .right-origin {
      margin-left: 114.2px;
      color: #333333;
      .now-price {
        font-size: 30.9px;
        line-height: 33.1px;
        .unit {
          font-size: 13.2px;
          vertical-align: middle;
          position: relative;
          top: -8.2px;
        }
      }
      .stock {
        font-size: 13.2px;
      }
      .sku-text {
        font-size: 13.2px;
        color: #333333;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width: 248.4px;
      }
    }
  }
  .scroll-view {
    max-height: 358.8px;
    padding: 0 8.28px 16.5px 8.28px;
    overflow: auto;

    .label {
      line-height: 13.248px;
      font-size: 13.248px;
      margin: 8.28px 0 5.52px 0;
    }
    .sku-list {
      li {
        display: inline-block;
        line-height: 28.7px;
        padding: 0 16.5px;
        border: 1px solid #bbb;
        border-radius: 3.3px;
        margin-right: 11px;
        margin-bottom: 11px;
        font-size: 13.2px;
        cursor: pointer;
        color: #5e5e5e;
        white-space: nowrap;
        text-align: center;
        max-width: 375.3px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .dialog-cart-btn {
      display: flex;
      width: 100%;
    }
  }
  .active {
    color: #ed4566;
    border-color: #ed4566;
  }
}
</style>
