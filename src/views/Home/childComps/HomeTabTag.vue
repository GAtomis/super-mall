<template>
  <div>
    <tab-tag>
      <template >
        <!-- 每一页内容 -->
        <van-tab :title="titleList[0]" class="tab">
          <!-- 页排列内容 -->
          
              
                  <news :newsData="homeGoods.news"/>
              
                
              
          

        </van-tab>
        <van-tab :title="titleList[1]" class="tab"><guess-like :guessData="homeGoods.pops"/></van-tab>
        <van-tab :title="titleList[2]" class="tab"><news :firstData="homeGoods.news"/></van-tab>

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
    return {}
  },
  components: {
    TabTag,
    News,
    GuessLike
  },
  name: 'HomeTabTag'
}
</script>
<style scope>
.tab {
  padding-top: 10px;
}
</style>