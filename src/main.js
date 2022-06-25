import Vue from 'vue'
import App from './App.vue'

import router from "@/router";
import store from '@/store';

import TypeNav from "@/components/TypeNav"
import Carousel from "@/components/Carousel"
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);

import '@/mock/mockServe';
import "swiper/css/swiper.css";
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
