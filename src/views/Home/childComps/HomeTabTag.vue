<template>
  <div>
    <tab-tag>
      <template >
        <!-- 每一页内容 -->
        <van-tab :title="titleList[0]">
          <!-- 页排列内容 -->
          
              
                <news :firstData="homeGoods.news"/>
              
          

        </van-tab>
        <van-tab :title="titleList[1]"></van-tab>
        <van-tab :title="titleList[2]"></van-tab>

      </template>

    </tab-tag>
  </div>
</template>
<script>
import TabTag from 'components/common/TabTag/TabTag'
import News from './Tagtab-child-comps/News'

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
    News
  },
  name: 'HomeTabTag'
}
</script>
<style scope>
</style>