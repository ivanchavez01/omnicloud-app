import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    auth: null,
  },
  getters: {},
  mutations: {
    setLogin(state, user) {
      state.auth = user;
    },
  },
  actions: {
    signOut({ commit }) {
      commit("setLogin", null);
    },
    login({ commit }, user) {
      commit("setLogin", user);
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});
