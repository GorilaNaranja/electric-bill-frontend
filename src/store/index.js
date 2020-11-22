import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  config: { headers: { "Content-Type": "application/json" } },
  url: "http://localhost:3000/bill",
};

const getters = {
  config(state) {
    return state.config;
  },
  url(state) {
    return state.url;
  },
};

const store = new Vuex.Store({
  state,
  getters,
});

export default store;
