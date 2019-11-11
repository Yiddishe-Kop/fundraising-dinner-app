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
    }
  },
  plugins: [sharedMutations({ predicate: ['updateTargetAmount', 'addDonation', 'updateNumOfChairs', 'updatechairSize', 'addName', 'showModal'] })],
});
