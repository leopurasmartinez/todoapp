import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    todos (state) {
      return state.todos;
    }
  },
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

    addTodo (state, todoItem) {
      state.todos.push(todoItem)
    },
    removeTodo (state, todoItem) {
      let id = todoItem.id;
      let removedEl = state.todos.findIndex((x) => x.id == id);
      if (removedEl !== null) {
        state.todos.splice(removedEl, 1);
      }
    },

    toggleAllTodos(state, isCompleted) {
      state.todos.map((todo) => todo.completed = isCompleted); 
    },
    clearCompletedTodos(state) {
      state.todos = state.todos.filter(todo => !todo.completed)
    }
  },
})