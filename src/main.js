import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '@/chillaid/layout/styles/layout.css'
import '@/chillaid/layout/styles/framework.css'
import '@/chillaid/layout/styles/fontawesome-free/css/fontawesome-all.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCountdownTimer from 'vuejs-countdown-timer';
Vue.use(VueCountdownTimer);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
