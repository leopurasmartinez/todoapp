<template>
  <div class="todoapp">

    <!-- <div class="toggle-all" type="button" onclick="alert('Hello world!')">
      <label>Click</label>
    </div> -->
    <div>
      <input 
        class="toggle-all"
        type="checkbox" 
        name="Toggle All" 
        :checked="isAllTodosSelected" 
      >
      <label for="Toggle All" @click="toggleAll"></label>

      <TodoNew></TodoNew>
    </div>


    <div class="main" v-if="todos.length > 0">
      <div class="todo-list">
        <li v-for="(todo, index) in todos" :key="index" 
          :class="{ editing : todo.isEditing, completed : todo.completed }">
          <div class="" v-show="!todo.isEditing" >
            <input 
              class="toggle"
              v-model="todo.completed" 
              type="checkbox" 
              name="completed" 
              :checked="todo.completed" 
              aria-label="Completed"
            >
            <label 
              for="todo.name" 
              @click="toggleCompleted(todo)"
              @dblclick.stop="editTodo(todo)"
            > {{ todo.name }} </label>
            <span class="destroy" @click="removeTodo(todo)"></span>
          </div>

          <TodoEdit v-show="todo.isEditing" :todo="todo"></TodoEdit>

        </li>
      </div>

    </div>
    <div class="footer" v-if="todos.length > 0">
      <div class="todo-count" v-html="uncompletedCount"></div>

      <div class="filters">
        <li v-for="filter in filters" :key="filter.name">
          <a :class="{ selected : filter.selected }" href="">{{ filter.name }}</a>
        </li>
      </div>

      <div class="clear-completed" v-if="isShowClearCompleted" @click="clearCompletedTodos()">
        Clear completed
      </div>
    </div>


  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'TodoList',
  components: {
    TodoNew: () => import('@/components/TodoNew'),
    TodoEdit: () => import('@/components/TodoEdit')
  },
  computed: {
    ...mapGetters([
      'todos',
    ]),
    uncompletedCount() {
      let count = this.todos.filter(todo => !todo.completed).length
      if (count == 1) {
        return `${'<strong>'}${count}${'</strong>'}${' item left'}`
      }
      return `${'<strong>'}${count}${'</strong>'}${' items left'}`

    },
    isShowClearCompleted() {
      return this.todos.filter(todo => todo.completed).length>0
    }
  },
  data () {
    return {
      isAllTodosSelected: false,
      newTodo: "",
      filters: [
        { name: "All", selected: true },
        { name: "Active", selected: false },
        { name: "Completed", selected: false }
      ]
    }
  },

  methods: {
    toggleCompleted(todo) {
      let ind = this.todos.indexOf(todo)
      this.todos[ind]['completed'] = !todo.completed
    },

    editTodo(todo) {
      console.log("🚀 ~ file: TodoList.vue:112 ~ todo", todo)
      todo.isEditing = true
    },

    removeTodo(todo) {
      this.$store.commit('removeTodo', todo)
    },

    toggleAll() {
      this.isAllTodosSelected = !this.isAllTodosSelected
      this.$store.commit('toggleAllTodos', this.isAllTodosSelected)
    },
    
    clearCompletedTodos() {
      this.$store.commit('clearCompletedTodos')
    }
  }
}
</script>