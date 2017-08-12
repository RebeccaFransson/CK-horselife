<template>
  <div id="home">
    <topBar></topBar>
    
    <bottomBar></bottomBar>
  </div>
</template>

<script>
import TopBar from './TopBar'
import BottomBar from './BottomBar'

export default {
  name: 'home',
  components: {
    topBar: TopBar,
    bottomBar: BottomBar
  },
  data() {
    return {
    }
  },
  methods: {}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

body {
  background-color: #c4d4dd;
  width: 100vw;
  height: 100vh;
}
</style>
