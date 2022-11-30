<template>
  <div class="todoapp">

    <h1>todos</h1>

    <TodoList></TodoList>

  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'Home',
  components: {
    TodoList
  },
  data () {
    return {
    }
  },


  methods: {
  }
}
</script>
