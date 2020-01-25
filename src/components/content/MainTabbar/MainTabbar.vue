<template>
    <div>
        <Tabbar>
            <tab-bar-item  path='/home'>
                <template v-slot:tab-bar-items-activeImg>
                    <img src="~@img/home-active.svg" alt="" >
                </template>
                <template v-slot:tab-bar-items-img>
                    <img src="~@img/home.svg" alt="" >
                </template>
                <template v-slot:tab-bar-items-text>
                    <div>首页</div>
                </template>
            </tab-bar-item>
            <tab-bar-item path='/category'>
              <template v-slot:tab-bar-items-activeImg>
                  <img src="~@img/category-active.svg" alt="" >
              </template>
              <template v-slot:tab-bar-items-img>
                  <img src="~@img/category.svg" alt="" >
              </template>
              <template v-slot:tab-bar-items-text>
                  <div>类别</div>
              </template>
            </tab-bar-item>
            <tab-bar-item path='/about'>
                <template v-slot:tab-bar-items-activeImg>
                    <img src="~@img/about-active.svg" alt="" >
                </template>
                <template v-slot:tab-bar-items-img>
                    <img src="~@img/about.svg" alt="" >
                </template>
                <template v-slot:tab-bar-items-text>
                    <div>关于</div>
                </template>
            </tab-bar-item>
            <tab-bar-item path='/own'>
                <template v-slot:tab-bar-items-activeImg>
                    <img src="~@img/own-active.svg" alt="" >
                </template>
                <template v-slot:tab-bar-items-img>
                    <img src="~@img/own.svg" alt="" >
                </template>
                <template v-slot:tab-bar-items-text>
                    <div>我的</div>
                </template>
            </tab-bar-item>
           
      
          </Tabbar> 
    </div>
</template>
<script>
import Tabbar from 'components/common/Tabbar/Tabbar'
import TabBarItem from 'components/common/Tabbar/TabBarItem'
export default {
  name: 'MainTabbar',
  components: {
    Tabbar,
    TabBarItem
  }
}
</script>
<style scoped>
</style>