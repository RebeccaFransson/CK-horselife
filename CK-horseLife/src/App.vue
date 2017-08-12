<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<script>
// <topBar></topBar>
import topBar from './components/TopBar.vue'

export default {
  name: 'app',
  components: {
    'topBar': topBar
  }
}
</script>

<style>
html {
  height: 100vh;
  width: 100vw;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
