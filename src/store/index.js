import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  charges: []
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
})

store.subscribe((mutation, state) => {
	localStorage.setItem('store', JSON.stringify(state));
});

export default store;