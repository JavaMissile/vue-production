import Vue from 'vue'
import App from './App.vue'

import router from "@/router";
import store from '@/store';

import TypeNav from "@/components/TypeNav"
import Carousel from "@/components/Carousel"
import Pagination from "@/components/Pagination"

import { Button, MessageBox } from 'element-ui';


Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
Vue.component(Button.name, Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;


import '@/mock/mockServe';
import "swiper/css/swiper.css";
import * as API from '@/api';


new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,
  store
}).$mount('#app')
