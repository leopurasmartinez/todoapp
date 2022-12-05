<template>
  <div>

    <div v-if="filteredTodos.length > 0">
      <input
        class="toggle-all"
        type="checkbox"
        name="Toggle All"
        :checked="checkIfAllItemsCompleted()"
      >
      <label for="Toggle All" @click="toggleAll"></label>
    </div>

    <TodoNew></TodoNew>

    <div class="main" v-if="filteredTodos.length > 0">
      <div class="todo-list">
        <li v-for="(todo, index) in filteredTodos" :key="index"
          :class="{ editing : todo.isEditing, completed : todo.completed }">

          <div class="view" v-if="!todo.isEditing" >
            <input
              class="toggle"
              v-model="todo.completed"
              type="checkbox"
              name="completed"
              :checked="todo.completed"
              aria-label="Completed"
              @click="archiveItem(todo)"
            >
            <label
              for="todo.name"
              @click="archiveItem(todo)"
              @dblclick.stop="editTodo(todo)"
            > {{ todo.name }} </label>
            <span class="destroy" @click="removeTodo(todo)"></span>
          </div>

          <TodoEdit v-if="todo.isEditing" :todo="todo" @cancelEdit="onCancelEdit(todo)"></TodoEdit>

        </li>
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
    ...mapGetters({
      todos: 'todo/getTodos',
    }),
    filteredTodos() {
      if (this.$route.name == 'DoneTodos') {
        return this.todos.filter(todo => todo.completed)
      } else if (this.$route.name == 'ActiveTodos') {
        return this.todos.filter(todo => !todo.completed)
      }
      return this.todos
    },
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

  methods: {

    editTodo(todo) {
      todo.isEditing = true
    },

    removeTodo(todo) {
      this.$store.commit('todo/removeTodo', todo)
    },

    archiveItem(todo) {
      this.$store.commit('todo/archiveTodo', todo)
    },
    

    toggleAll() {
      this.$store.commit('todo/toggleAllTodos')
    },

    clearCompletedTodos() {
      this.$store.commit('todo/clearCompletedTodos')
    },

    onCancelEdit(todo) {
      todo.isEditing = false
    },


    checkIfAllItemsCompleted() {
      return this.todos.every((todo) => todo.completed)
    }
  }
}
</script>

<style scoped>

@import './../assets/css/TodoList.css'

</style>