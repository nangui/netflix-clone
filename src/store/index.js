import { createStore } from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import state from './state'

const store = createStore({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
})

export default store
