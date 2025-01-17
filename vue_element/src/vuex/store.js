import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  count:1
}

const mutations={
  add(state, n = 1){
      state.count+=n;
  },
  reduce(state){
      state.count-=1;
  }
}

export default new Vuex.Store({
  state, mutations
});