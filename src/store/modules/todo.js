function initialTodoState() {
  return {
    todos: []
  }
}

const todo = {
  namespaced: true,
  state: initialTodoState,
  getters: {
    getTodos (state) {
      return state.todos;
    }
  },
  mutations: {
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
    },

    removeTodo (state, todoItem) {
      let removedEl = state.todos.findIndex((x) => x.id == todoItem.id);
      if (removedEl !== null && removedEl !== -1) {
        state.todos.splice(removedEl, 1);
      }
    },

    archiveTodo(state, todoItem) {
      let archivedEl = state.todos.findIndex((x) => x.id == todoItem.id);
      state.todos[archivedEl].completed = !state.todos[archivedEl].completed
    },

    toggleAllTodos(state) {
      let status = state.todos.every((todo) => todo.completed)
      state.todos.map((todo) => todo.completed = !status);
    },

    clearCompletedTodos(state) {
      state.todos = state.todos.filter(todo => !todo.completed)
    }
  },
};

export default todo;