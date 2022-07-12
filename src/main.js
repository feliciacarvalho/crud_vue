import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import layout from '@/components/template/Layout.vue'

Vue.config.productionTip = false
Vue.component('app-layout', layout);
new Vue({
  router,
  store,
  vuetify,
 
  render: function (h) { return h(App) }
}).$mount('#app')
