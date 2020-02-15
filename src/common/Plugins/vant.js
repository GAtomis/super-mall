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

