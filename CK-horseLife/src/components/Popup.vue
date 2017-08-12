<template>
  <div id="popup">
    <h1>{{ whichPopup }}</h1>
  </div>
</template>

<script>
export default {
  name: 'popup',
  props: {
    whichPopup: {
      type: String
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
  position: absolute; 
  left: 0; 
  right: 0; 
  bottom: 0;
  margin-left: auto; 
  margin-right: auto; 
  width: 500px;
  background-color: white;
}
#popup .hide{
  display: none;
}
</style>
