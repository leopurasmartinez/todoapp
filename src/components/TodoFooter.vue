<template>

  <div class="footer" v-if="todos.length > 0">
    <div class="todo-count" v-html="uncompletedCount"></div>

    <div class="filters">
      <li v-for="filter, ind in filters" :key="ind">
        <router-link 
          :class="{ selected : filter.route == $route.path }"
          :to=filter.route
        >
          {{ filter.name }}
        </router-link>
      </li>
    </div>

    <div class="clear-completed" v-if="isShowClearCompleted" @click="clearCompletedTodos()">
      Clear completed
    </div>
  </div>

</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Footer',
  computed: {
    ...mapGetters({
      todos: 'todo/getTodos',
    }),
    uncompletedCount() {
      let count = this.todos.filter(todo => !todo.completed).length
      if (count === 1) {
        return `<strong>${count}</strong> item left`
      }
      return `<strong>${count}</strong> items left`

    },
    isShowClearCompleted() {
      return this.todos.filter(todo => todo.completed).length>0
    }
  },
  data () {
    return {
      filters: [
        { name: "All", selected: true, route: "/" },
        { name: "Active", selected: false, route: "/active" },
        { name: "Completed", selected: false, route: "/completed" }
      ]
    }
  },

  methods: {
    
    clearCompletedTodos() {
      this.$store.commit('todo/clearCompletedTodos')
    }
  }
}
</script>

<style scoped>

@import './../assets/css/TodoFooter.css'

</style>