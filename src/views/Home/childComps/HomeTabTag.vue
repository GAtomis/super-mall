<template>
  <div>
    <van-tabs v-model="active" @change="change" @rendered="rendered" animated swipeable >
      
    
    
      
        <!-- 每一页内容 -->
        <van-tab :title="titleList[0]"  :name="Object.keys(this.homeGoods)[0]" class="tab">
          <!-- 页排列内容 -->
          
              
                  <news :newsData="homeGoods.news"/>
              
                
              
          

        </van-tab>
        <van-tab :title="titleList[1]" 
        :name="Object.keys(this.homeGoods)[1]"  class="tab"><guess-like :guessData="homeGoods.pops"/></van-tab>
        <van-tab :title="titleList[2]" 
        :name="Object.keys(this.homeGoods)[2]" class="tab"><news :firstData="homeGoods.news"/></van-tab>

      

    </van-tabs>
  </div>
</template>
<script>
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
      active: 0
    }
  },
  components: {
    News,
    GuessLike
  },
  name: 'HomeTabTag',
  methods: {
    rendered(name) {
      console.log(Object.keys(this.homeGoods))

      this.$emit('rendered', name)
    },
    change(name) {
      this.$emit('change', name)
    }
  }
}
</script>
<style scope>
.tab {
  padding-top: 10px;
}
</style>