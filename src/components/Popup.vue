<template>
  <div id="popup">
    <div class="topBar">
      <h3>{{ whichPopup }}</h3>
      <div class="close" @click="closePopup">&#10006;</div>
    </div>
    <inackodering v-if="whichPopup === 'Inackodering'"></inackodering>
    <garden v-if="whichPopup === 'Gården'"></garden>
    <hastar v-if="whichPopup === 'Hästar'"></hastar>
  
  </div>
</template>

<script>
import Inackodering from './popups/Inackodering'
import Garden from './popups/Garden'
import Hastar from './popups/Hastar'

export default {
  name: 'popup',
  components: {
    inackodering: Inackodering,
    garden: Garden,
    hastar: Hastar
  },
  props: {
    whichPopup: {
      type: String
    },
    closePopup: {
      type: Function
    }
  }
}
</script>

<style>
#popup {
  align-self: center;
  width: 97vw;
  min-height: min-content;
  background-color: white;
  margin: auto;
  border: 1px solid white;

  transition: all .5s ease;
}

#popup .topBar {
  background-image: url('../../media/alla.jpg');
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

#popup.hide {
  display: none;
}

/* TABLETS AND MOBILE DEVICES */
@media only screen and (max-device-width: 768px) {
 #popup{
    position: absolute;
    top: 1vw;
    left: 1vw;
    width: 99vw;
  }
  #popup .popup .text {
    width: 100%;
  }
}
</style>
