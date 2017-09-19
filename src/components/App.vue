<template>
  <div id="app">
    <navigation></navigation>
    <bottomBar></bottomBar>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
import BottomBar from './BottomBar'

export default {
  name: 'app',
  components: {
    'navigation': Navigation,
    'bottomBar': BottomBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
html {
  height: 100vh;
  width: 100vw;
}

body {
  margin: 0;
  padding: 0;
  background-color: #c4d4dd;
  width: 100vw;
  height: 100px;
}
.freezeScroll{
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
