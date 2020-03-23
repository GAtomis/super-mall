import Vue from "vue";

import { Button } from "vant";
Vue.use(Button)

//引入Swiper的
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
//懒加载配合Swiper使用

import { Lazyload } from 'vant';

Vue.use(Lazyload);



//引入tab组件
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);

//引入宫格使用
import { Grid, GridItem } from 'vant';

Vue.use(Grid);
Vue.use(GridItem);