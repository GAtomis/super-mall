<template>
  <div>
      <div class="RIW-box">
          <ul class="RIW-box-row" >
            
            <li class='RIW-box-td' v-for="(item,index) of rankList" :key="index">
              <a :href="item.link">
                <img class="RIW-box-img" :src="item.image" >
                <div class="RIW-box-title">{{item.title}}</div>
              </a>
            </li>
            
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  name: 'RankInWeek',
  data() {
    return {}
  },
  props: {
    rankList: Array
  }
}
</script>
<style scope>
/* 独立ul */
.RIW-box {
  margin-top: 10px;
  border: 1px solid;
}
.RIW-box-row {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}
.RIW-box-td {
  flex: 0 0 25%;
  width: 25%;
}
.RIW-box-img {
  width: 100%;
}
</style>