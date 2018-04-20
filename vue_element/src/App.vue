<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App'
}
</script>

<style scoped>
  #app {
    margin-top: 60px;
  }
</style>
