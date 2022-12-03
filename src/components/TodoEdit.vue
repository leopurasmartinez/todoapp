<template>
  <div class="" >
    <input
      ref="input"
      class="edit"
      v-model="newName"
      type="text" aria-label="Editing Todo"
      @blur="editTodo(todo)"
      @keyup.enter="editTodo(todo)"
      @keydown.esc="cancelEdition(todo)"
    >
    <!-- <label
      for="todo.name"
    > {{ todo.name }} </label> -->

    <!-- <input
      class="toggle"
      v-model="todo.completed"
      type="checkbox"
      name="completed"
      :checked="todo.completed"
      aria-label="Completed"
    >
    <span class="destroy" @click="removeTodo(todo)"></span> -->
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'TodoEdit',
  props: {
    todo: { type: Object, required: true },
  },
  components: {
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
      // console.log("🚀 ~ file: TodoEdit.vue:51 ~ todo", todo)
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
      console.log("🚀 ~ file: TodoEdit.vue:68 ~ cancelEdition ~ newTodo", newTodo)
    }
  }
}
</script>