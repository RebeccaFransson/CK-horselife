<template>
  <div id="popup" class="hidden">
    <div class="topBar">
      <h3>{{ whichPopup }}</h3>
      <div class="close" @click="closePopup">&#10006;</div>
    </div>
    <inackodering v-if="whichPopup === 'Inackodering'"></inackodering>
    <garden v-if="whichPopup === 'Gården'"></garden>
    <hastar v-if="whichPopup === 'Hästar'"></hastar>
    <galleri v-if="whichPopup === 'Galleri'"></galleri>
  
  </div>
</template>

<script>
import Inackodering from './popups/Inackodering'
import Garden from './popups/Garden'
import Hastar from './popups/Hastar'
import Gallery from './popups/Gallery'

export default {
  name: 'popup',
  components: {
    inackodering: Inackodering,
    garden: Garden,
    hastar: Hastar,
    galleri: Gallery
  },
  props: {
    whichPopup: {
      type: String
    },
    closePopup: {
      type: Function
    }
  },
  mounted: function(){
    $('#popup').css('display', 'none')
  }
}
</script>

<style>
#popup {
  position: relative;
  top: 0;
  max-height: 100vh;
  align-self: center;
  width: 97vw;
   min-height: min-content; 
  background-color: white;
  margin: auto;
  border: 1px solid white;

  /* transition: all .5s ease; */
  transition: all 0.5s ease;
}

#popup .topBar {
  background-image: url('../../static/alla.jpg');
  background-position: center;
  background-size: cover;
  color: #403427;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

#popup .topBar h3 {
  font-size: 250%;
  text-align: center;
  margin: 0;
  border: 3px solid white;
  background-color: rgba(255, 255, 255, 0.39);
  padding: 0 10px;
}

#popup .topBar .close {
  cursor: pointer;
  font-size: 250%;
  padding: 0 15px;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  transition: all .5s ease;
}

#popup .topBar .close:hover {
  transform: scale(1.25);
}

/* When popup is hidden  */
#popup.hidden{
  top: 200vh; 
  max-height: 0;
  min-height: 0;
}

/* TABLETS AND MOBILE DEVICES */
@media only screen and (max-device-width: 768px) {
 #popup{
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
  }
#popup .topBar h3 {
  font-size: 200%;
}
#popup .popup .text {
    width: 100%;
  }
  
  /* When popup is hidden  */
  #popup.hidden{
    top: 100vh;
  }
}

</style>
