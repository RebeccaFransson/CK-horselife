<template>
  <div id="home">
    <topBar :open-popup="openPopup"></topBar>
    
    <bottomBar></bottomBar>
    <popup v-show="popup"></popup>
  </div>
</template>

<script>
import TopBar from './TopBar'
import BottomBar from './BottomBar'
import Popup from './Popup'

export default {
  name: 'home',
  components: {
    topBar: TopBar,
    bottomBar: BottomBar,
    popup: Popup
  },
  data() {
    return {
      popup: true,
      whichPopup: ''
    }
  },
  methods: {
    openPopup: function(which) {
      this.popup = true
      this.whichPopup = which
    },
    closePopup: function() {
      this.popup = false
    }
  }
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
