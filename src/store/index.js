import Vue from 'vue'
import Vuex from 'vuex'
import todo from '@/store/modules/todo.js'

Vue.use(Vuex)

function initialState() {
  return {}
}

export default new Vuex.Store({
  state: initialState,
  mutations: {
    loadStore() {
      if (localStorage.getItem('store')) {
        try {
          this.replaceState(JSON.parse(localStorage.getItem('store')));
        }
        catch(e) {
          console.log('Could not initialize store', e);
        }
      }
    },
  },
  modules: {
    todo
  }
})