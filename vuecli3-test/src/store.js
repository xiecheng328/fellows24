import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: {
    add(state, num) {
      state.count += num;
    }
  },
  actions: {
    addAction({ commit }) {
      setTimeout(() => {
        commit('add', 10);
      }, 2000);
    }
  },
  getters: {
    countGetter(state) {
      return state.count += 100;
    }
  }
});
