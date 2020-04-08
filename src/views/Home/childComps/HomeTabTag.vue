<template>
  <div>
    <tab-tag offsetTop="44" :isSticky="true" >
      <template >
        <!-- 每一页tab内容 -->
        <van-tab :title="titleList[0]" :name="Object.keys(this.homeGoods)[0]" class="tab">
          <!-- 页排列内容 -->
          
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
              :immediate-check="false"
            >
              <news :newsData="homeGoods.news"/>
            </van-list>
                  
              
                
              
          

        </van-tab>
        <van-tab :title="titleList[1]" :name="Object.keys(this.homeGoods)[1]" class="tab">
          <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
              :immediate-check="false"
            ><guess-like :guessData="homeGoods.pops"/></van-list></van-tab>
        <van-tab :title="titleList[2]" :name="Object.keys(this.homeGoods)[2]" class="tab">
          <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              :immediate-check="false"><div style="height:200px;text-align:center;"><h1>此页面不做展示</h1></div></van-list>
        </van-tab>

      </template>

    </tab-tag>
  </div>
</template>
<script>
import TabTag from 'components/common/TabTag/TabTag'
import News from './Tagtab-child-comps/News'
import GuessLike from './Tagtab-child-comps/GuessLike'

export default {
  props: {
    titleList: {
      type: Array,
      default() {
        return []
      }
    },
    homeGoods: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  data() {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  components: {
    TabTag,
    News,
    GuessLike
  },
  name: 'HomeTabTag',
  methods: {
    onLoad() {
      // // 异步更新数据
      // // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }

      //   // 加载状态结束
      //   this.loading = false;

      //   // 数据全部加载完成
      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 1000);
      console.log('触发加载函数')

      this.$emit('loadMore')
    }
  }
}
</script>
<style scope>
.tab {
  padding-top: 10px;
}
</style>