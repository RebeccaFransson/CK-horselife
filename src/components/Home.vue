<template>
  <div id="home">
    <navigation></navigation>
    
    <bottomBar></bottomBar>
    
  </div>
</template>

<script>
import Navigation from './Navigation'
import BottomBar from './BottomBar'

export default {
  name: 'home',
  components: {
    navigation: Navigation,
    bottomBar: BottomBar
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');


</style>
