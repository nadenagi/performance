import Vue from 'vue';
import Vuex from 'vuex';
import teamPreformance from './modules/team_preformance';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { team: teamPreformance },
});
