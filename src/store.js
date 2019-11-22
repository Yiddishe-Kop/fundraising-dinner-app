import Vue from 'vue';
import Vuex from 'vuex';
import sharedMutations from 'vuex-shared-mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    targetAmount: 350000,
    amountRaised: 0,
    numOfChairs: 50,
    numSponsored: 7,
    names: [],
    chairSize: 70,
    showModal: false
  },
  mutations: {
    setState(state, newState) {
      state.names = newState.names
      state.amountRaised = newState.amountRaised
    },
    updateTargetAmount(state, num) {
      state.targetAmount = Number(num)
    },
    addDonation(state, num) {
      state.amountRaised += Number(num)
    },
    updateNumOfChairs(state, num) {
      state.numOfChairs = Number(num)
    },
    updatechairSize(state, size) {
      state.chairSize = Number(size)
    },
    addName(state, name) {
      state.names = [...state.names, name]
    },
    removeName(state, i) {
      let namesCopy = state.names;
      if (namesCopy.length === 1) {
        namesCopy = []
      } else {
        namesCopy.splice(i, 1)
      }
      state.names = namesCopy
    },
    showModal(state) {
      state.showModal = true
    },
    closeModal(state) {
      state.showModal = false
    }
  },
  getters: {
    percentageRaised: state => {
      return ((state.amountRaised / state.targetAmount) * 100).toFixed(3);
    },
    chairsSponsored: (state, getters) => {
      return (getters.percentageRaised / 100) * state.numOfChairs;
    },
    fullChairsSponsored: (state, getters) => {
      return Math.floor(getters.chairsSponsored)
    },
    watchAndSaveState: state => { // a hack to always save the state in localStorage
      console.log(localStorage.getItem('dinnerData'));
      state.names.length >= 1 && localStorage.setItem('dinnerData', JSON.stringify(state))
      return state.amountRaised + ' ' + state.names
    }
  },
  actions: {
    saveState: ({ state }) => {
      localStorage.setItem('dinnerData', JSON.stringify(state))
    },
    retrieveState: ({ commit }) => {
      console.log(localStorage.getItem('dinnerData'));
      if (localStorage.getItem('dinnerData')) {
        let newState = JSON.parse(localStorage.getItem('dinnerData'))
        commit('setState', newState)
      }
    },
    clearData: () => {
      localStorage.removeItem('dinnerData')
      location.reload();
    }
  },
  plugins: [sharedMutations({ predicate: ['updateTargetAmount', 'addDonation', 'updateNumOfChairs', 'updatechairSize', 'addName', 'removeName', 'showModal'] })],
});
