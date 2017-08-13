<template>
  <div id="popup" :class="{hide : !popup}">
    <h1>{{ whichPopup }}</h1>
    <h1>{{ whichPopup }}</h1>
    <h1>{{ whichPopup }}</h1>
    <h1>{{ whichPopup }}</h1>
  </div>
</template>

<script>
export default {
  name: 'popup',
  props: {
    popup: {
      type: Boolean
    },
    whichPopup: {
      type: String
    }
  },
  watch: {
    popup: function () {
      if (this.popup) {
        $('#popup').animate({ height: 'auto' }, 500)
      }
    }
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
#popup {
  align-self: center;
  width: 97vw;
  background-color: white;
  margin: auto;
  height: 0;
  transition: all .5s ease;
}

#popup.hide {
  transition: all .5s ease;
  display: none;
  top: 100vh;
}
</style>
