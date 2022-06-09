import axios from 'axios';

// initial state
const state = () => ({
  loading: false,
  teamPreformance: [],
});

// getters
const getters = {};

// actions
const actions = {
  fetching(context) {
    context.commit('UPDATE_LOADING', true);
    axios.get('https://fe-task.getsandbox.com/performance').then((res) => {
      context.commit('UPDATE_TEAM', res.data);
      context.commit('UPDATE_LOADING', false);
    });
  },
};

// mutations
const mutations = {
  UPDATE_TEAM(store, payload) {
    store.teamPreformance = payload;
  },
  UPDATE_LOADING(store, payload) {
    store.loading = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
