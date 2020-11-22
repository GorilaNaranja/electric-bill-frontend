import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const config = { headers: { "Content-Type": "application/json" } };

const state = {
  bills: [],
};

const getters = {
  bills(state) {
    return state.bills;
  },
};

const actions = {
  async getBills({ commit }) {
    const { data } = await axios.get("http://localhost:3000/bill", config);
    commit("SET_BILLS", data);
  },
  async getBill({ commit }) {
    const { data } = await axios.get("http://localhost:3000/bill", config);
    commit("SET_BILLS", data);
  },
};

const mutations = {
  SET_BILLS(state, bills) {
    state.bills = bills;
  },
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});

export default store;
