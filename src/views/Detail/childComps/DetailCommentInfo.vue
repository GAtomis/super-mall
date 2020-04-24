<template>
  <div class="comment" v-if="Object.keys(this.commentInfo).length !== 0">
    <div>
      <div class="mui-tagscloud-title">
        <div>商品评价</div>
        <div class="title-right" @click="moreClick">
          查看全部<span class="icon-xiangyou iconfont"></span>
        </div>
      </div>
      <div class="mui-tagscloud-comments">
        <div class="mui-tagscloud-user">
          <!-- <img
            class="mui-tagscloud-img"
            src="//wwc.alicdn.com/avatar/getAvatar.do?userIdStr=vFkSPFHuXH*evF8LPmHSXHxGvFQSOml-OHkSMH7-MFxYP8*HMGcLP88SOFxWX88u&amp;width=40&amp;height=40&amp;type=sns"
          /> -->
          <img class="mui-tagscloud-img" :src="commentInfo.icon" />

          <span class="mui-tagscloud-name">{{ commentInfo.username }}</span>
        </div>
        <div class="mui-tagscloud-content">{{ commentInfo.content }}</div>
        <div class="mui-tagscloud-img">
          <ul class="pics" v-if="Object.keys(commentInfo.img).length !== 0">
            <li v-for="(item, index) of imgArray" :key="index">
              <van-image lazy-load :src="item" width="100%" height="100%">
                <template v-slot:loading>
                  <van-loading lazy-load type="spinner" size="20" />
                </template>
                <template v-slot:error>加载失败</template>
              </van-image>
            </li>
          </ul>
        </div>
        <div class="mui-tagscloud-date">
          <span>{{ commentInfo.created | getFormDate }}</span>
          <span v-for="(item, index) of commentInfo.sku" :key="index"
            >{{ item.type }}:{{ item.value }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatDate } from 'common/utils/utils'
export default {
  computed: {
    imgArray() {
      let array = this.commentInfo.img
      if (array.length > 2) {
        console.log(array.length)

        array.splice(2, array.length - 2)

        return array
      } else {
        return array
      }
    }
  },
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  name: 'DetailCommentInfo',
  data() {
    return {}
  },
  filters: {
    getFormDate(value) {
      // 1.现将时间戳转换为form格式

      const date = new Date(value * 1000)
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')

      //2.将date进行格式化
    }
  },
  methods: {
    moreClick() {
      alert('该功能还未开发')
    }
  }
}
</script>
<style lang="less" scoped>
.comment {
  padding: 0.5rem;
  .mui-tagscloud-title {
    // margin: 0.3rem;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    .title-right {
      span {
        font-size: 1rem;
      }
    }
  }
  .mui-tagscloud-comments {
    margin: 0.5rem 0.3rem 0.5rem 0;
    .mui-tagscloud-user {
      line-height: 0.8rem;
      font-size: 0.6rem;
      margin-bottom: 0.5rem;
      position: relative;
      .mui-tagscloud-img {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 1rem;
        -moz-border-radius: 1rem;
        vertical-align: middle;
      }
      .mui-tagscloud-name {
        vertical-align: middle;
        padding: 0.25rem;
        line-height: 1.1rem;
        color: #999;
      }
    }
    .mui-tagscloud-content {
      font-size: 0.65rem;
      line-height: 0.8rem;
      text-align: justify;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      -webkit-box-pack: center;
      height: 1rem;
      overflow: hidden;
      word-break: break-all;
    }
    .mui-tagscloud-date {
      font-size: 0.5rem;
      padding-top: 0.4rem;
      color: #999;
      line-height: 0.7rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      span {
        margin: 0 0.3rem 0 0;
      }
    }
    .mui-tagscloud-img {
      .pics {
        overflow: hidden;
        margin-top: 0.25rem;
        list-style: none;
        padding: 0;
        li {
          width: 2.75rem;
          height: 2.75rem;
          float: left;
          margin: 0 0.3rem 0.3rem 0;
          background-color: #fff;
          display: -webkit-box;
          -webkit-box-align: center;
          -webkit-box-pack: center;
        }
      }
    }
  }
}
</style>
