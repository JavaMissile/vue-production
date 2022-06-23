import Vue from 'vue'
import App from './App.vue'

import TypeNav from "@/components/TypeNav"
import Carousel from "@/components/Carousel"
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
import router from "@/router";
import store from '@/store';
import '@/mock/mockServe';
import "swiper/css/swiper.css";
import { reqGetSearchInfo } from '@/api';
console.log(reqGetSearchInfo());
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
