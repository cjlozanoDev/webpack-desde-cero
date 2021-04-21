import Vue from 'vue';
import App from '../App.vue';

import sayHi, { sayBye } from './utils'

new Vue({
  el: "#app",
  render: h => h(App)
});
