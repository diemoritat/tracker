import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// const store = new Vuex.Store({
  // state: {
  //   charges: []
  // },
//   mutations: {
//     initialiseStore: (state) => {
// 			if(localStorage.getItem('store')) {
// 				this.replaceState(
// 					Object.assign(state, JSON.parse(localStorage.getItem('store')))
// 				);
// 			}
// 		},
    // createCharge: (state, charge) => {
    //   state.charges.push(charge);
    // }
//   },
//   actions: {}
// })

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