import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate() {
		store.commit('initialiseStore', store)
	},
  render: h => h(App)
}).$mount('#app')
