import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
Vue.use(Vuex)
// 创建 store 实例
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
