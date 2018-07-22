const mutations = {
  initialiseStore: (state, store) => {
    if(localStorage.getItem('store')) {
      store.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem('store')))
      );
    }
  },
  createCharge: (state, charge) => {
    state.charges.push(charge)
  }
}

export default mutations