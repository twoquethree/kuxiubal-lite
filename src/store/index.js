import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

// State, Mutations, Getters, Actions
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
