<template>
  <div class="todoapp">

    <h1>todos</h1>

    <TodoList></TodoList=>

    <TodoFooter />

  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import TodoFooter from '@/components/TodoFooter.vue'

export default {
  name: 'TodoDone',
  components: {
    TodoList,
    TodoFooter
  },
  data () {
    return {
    }
  },


  methods: {
  }
}
</script>
