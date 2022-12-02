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
    updateTodo (state, todoItem) {
      
      let findEl = state.todos.find((x) => x.id == todoItem.id);
      if (findEl !== null) {
        if (todoItem.completed !== undefined) {
          findEl.completed = todoItem.completed;
        }
        if (todoItem.name !== undefined) {
          findEl.name = todoItem.name;
        }
      } else {
        console.log(`To Do List Item ${todoItem.id} couldn't be found`);
      }
      console.log("🚀 ~ file: index.js:31 ~ state.todos", state.todos)
    },

    removeTodo (state, todoItem) {
      let removedEl = state.todos.findIndex((x) => x.id == todoItem.id);
      if (removedEl !== null) {
        state.todos.splice(removedEl, 1);
      }
    },

    archiveTodo(state, todoItem) {
      let archivedEl = state.todos.findIndex((x) => x.id == todoItem.id);
      state.todos[archivedEl].completed = !state.todos[archivedEl].completed
    },

    toggleAllTodos(state, isCompleted) {
      state.todos.map((todo) => todo.completed = isCompleted); 
    },

    clearCompletedTodos(state) {
      state.todos = state.todos.filter(todo => !todo.completed)
    }
  },
})