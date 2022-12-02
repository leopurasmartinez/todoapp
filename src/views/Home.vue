<template>
  <div class="todoapp">

    <h1>todos</h1>

    <TodoList></TodoList>

    <TodoFooter />

  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import TodoFooter from '@/components/TodoFooter.vue'

export default {
  name: 'Home',
  components: {
    TodoList,
    TodoFooter
  }
}
</script>
