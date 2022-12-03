<template>
  <input
    autofocus
    ref="input"
    class="edit"
    v-model="newName"
    type="text" aria-label="Editing Todo"
    @blur="editTodo(todo)"
    @keyup.enter="editTodo(todo)"
    @keydown.esc="cancelEdition(todo)"
  >
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'TodoEdit',
  props: {
    todo: { type: Object, required: true },
  },
  computed: {
    ...mapGetters([
      'todos',
    ])
  },
  data () {
    return {
      newName: this.todo.name.slice(0),
      originalName: this.todo.name.slice(0)
    }
  },

  methods: {
    editTodo(todo) {
      if (this.newName === "") {
        this.$store.commit('removeTodo', todo)
      } else {
        todo.name = this.newName
        todo.isEditing = false
        this.$store.commit('updateTodo', todo)
      }
    },

    cancelEdition(todo) {
      let newTodo = {...todo}
      newTodo.name = this.originalName
      newTodo.isEditing = false
      this.newName = todo.name
      todo.isEditing = false
      this.$store.commit('updateTodo', newTodo)
      this.$emit('cancelEdit')
    }
  }
}
</script>