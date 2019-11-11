import Vue from 'vue';
import Vuex from 'vuex';
import sharedMutations from 'vuex-shared-mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numOfChairs: 50,
    numSponsored: 7,
    names: [],
    chairSize: 70
  },
  mutations: {
    updateNumOfChairs(state, num) {
      state.numOfChairs = Number(num)
    },
    updatechairSize(state, size) {
      state.chairSize = Number(size)
    },
    addName(state, name) {
      state.names = [...state.names, name]
    },
    add(state) {
      state.numSponsored < state.numOfChairs && state.numSponsored++
    },
    remove(state) {
      state.numSponsored > 0 && state.numSponsored--
    },
  },
  plugins: [sharedMutations({ predicate: ['updateNumOfChairs', 'updatechairSize', 'addName', 'add', 'remove'] })],
});
