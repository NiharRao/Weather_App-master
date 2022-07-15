import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/axios'

Vue.config.productionTip = false

// Weather API Key
const Weather_API_KEY = "725d7c9c7113aece5d13e5587ede804c";
Vue.prototype.$API_KEY = Weather_API_KEY;

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
