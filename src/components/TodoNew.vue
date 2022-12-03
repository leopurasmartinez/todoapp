<template>
  <input 
    autofocus
    class="new-todo" 
    v-model="newTodo" 
    placeholder="What do you need to do?"
    type="text" aria-label="New Todo" 
    @keyup.enter="addTodo"  
  >
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'TodoNew',
  data () {
    return {
      newTodo: "",
    }
  },

  methods: {
    addTodo() {
      if (this.newTodo !== '') {
        this.$store.commit('addTodo', {
          id: uuidv4(),
          name: this.newTodo,
          completed: false,
          isEditing: false,
        })
        this.newTodo = ""
      }
    }
  }
}
</script>
