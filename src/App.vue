<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    beforeCreate() {
      this.$store.commit('loadStore');
    }
  }
</script>

<style>

@import './assets/stylesheets/index.css';

</style>